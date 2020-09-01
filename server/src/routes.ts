/**
 * API Routes
 */

 // External Imports
import express from 'express';

// Project Imports
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

// Get Only Routes Module from express
const routes = express.Router();

// Define Class Routes
const classesControllers = new ClassesController();
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

// Define Connection Routes
const connectionsControllers = new ConnectionsController();
routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;