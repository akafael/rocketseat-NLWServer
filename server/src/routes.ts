/**
 * Create API Routes
 */

import express, { request, response } from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

/**
 * Scheduled Item time representation
 */
interface ScheduleItem
{
    week_day: number;
    from: string;
    to: string;
};

// Get Only Routes Module from express
const routes = express.Router();
routes.post('/classes',async(request,response) =>{
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
        const insertUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
            cost,
            schedule
        });

        // Create New Class
        const class_id = await trx('classes').insert({
            subject,
            cost,
            user_id: insertUsersIds[0]
        });

        // Convert 
        const classSchedule = schedule.map(
            (scheduleItem:ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                }
            }
        )

        // Send all operations to database
        await trx.commit();
        
        // Return response once it is done;
        return response.status(201).send();
        
    } catch (error) {
        // Undo alll transaction operations
        trx.rollback();

        // Return Generic Error
        return response.status(400).json(
            {
                errors: 'Unexpected error while creating new class'
            }
        );
    }
});

export default routes;