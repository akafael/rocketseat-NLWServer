/**
 * Connection Controler
 */

// External Imports
import { Request, Response} from 'express';

// Project Imports
import db from '../database/connection';

export default class ConnectionsController {
    /**
     * Count Connections number for a given user id
     * @param request 
     * @param response 
     */
    async index(request: Request, response: Response) {

        const trx = await db.transaction();
        try {
            const totalConnections = await trx('connections').count('* as total');
            const { total } = totalConnections[0];

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
                    errors: 'Unexpected error while getting connections data'
                }
            );
        }

    }

    /**
     * Create new connection
     * @param request 
     * @param response 
     */
    async create(request: Request, response: Response) {
        const {user_id} = request.body;

        const trx = await db.transaction();
        try {
            // Insert New Connection
            await trx('connections').insert({
                user_id,
            });

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
                    errors: 'Unexpected error while creating new connection'
                }
            );
        }
    }
}