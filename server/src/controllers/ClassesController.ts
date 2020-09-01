/**
 * Class Controler
 */

 // External Imports
import { Request, Response} from 'express'; // Required to get Express types

// Project Imports
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

/**
 * Scheduled Item time representation
 */
interface ScheduleItem
{
    week_day: number;
    from: string;
    to: string;
};

/**
 * Classes Controler
 * - Convert HTTP request to Database operation
 */
export default class ClassesController {

    /**
     * Return classes using filters
     * @param request 
     * @param response 
     */
    async index(request: Request, response: Response) {
        const filters = request.query;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time ) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        const trx = await db.transaction();
        try {
            const timeInMinutes = convertHourToMinutes(time);

            // Create Select Query with filters
            const classes = await trx('classes')
                .whereExists(function() {
                    this.select('class_schedule.*')
                        .from('class_schedule')
                        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
                })
                .where('classes.subject', '=', subject)
                .join('users', 'classes.user_id', '=', 'users.id')
                .select(['classes.*', 'users.*'])

            // Send all operations to database
            await trx.commit();
            
            // Return response once it is done;
            return response.status(200).json(classes);
        } catch (error) {
            // Undo transaction operations
            trx.rollback();

            // Return Generic Error
            return response.status(400).json(
                {
                    errors: 'Unexpected error while getting connections data'
                }
            );
        }
    }

    /**
     * Create New Class Rote
     * 
     * @param request 
     * @param response 
     */
    async create(request: Request, response: Response) {
        // Get Data from request body
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        // Assyncronous Transaction Operation
        const trx = await db.transaction();
        try {
        
            // Create New User
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
                cost,
                schedule
            });
    
            // Create New Class
            const insertedClassIds = await trx('classes').insert({
                subject,
                cost,
                user_id: insertedUsersIds[0]
            });
    
            // Convert Scheduled Time to Format inside database
            const classSchedule = schedule.map(
                (scheduleItem: ScheduleItem) => {
                    return {
                        class_id: insertedClassIds[0],
                        week_day: scheduleItem.week_day,
                        from: convertHourToMinutes(scheduleItem.from),
                        to: convertHourToMinutes(scheduleItem.to),
                    };
                }
            )
    
            await trx('class_schedule').insert(classSchedule)
            .catch(err => console.log('err', err)) ;
    
            // Send all operations to database
            await trx.commit();
            
            // Return response once it is done;
            return response.status(201).send();
        } catch (error) {
            // Undo transaction operations
            trx.rollback();

            // Return Generic Error
            return response.status(400).json(
                {
                    errors: 'Unexpected error while creating new class'
                }
            );
        }
    }

}