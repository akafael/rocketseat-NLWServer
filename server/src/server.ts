/**
 * Server Application
 */

 // External Imports
import express from 'express';
import cors from 'cors';

// Project Imports
import routes from './routes';

const app = express();

app.use(cors); // Enable Acept API Calls fom sama address
app.use(express.json()); // Enable JSON
app.use(routes); // Use routes defined at routes.ts

// List to HTTP Requests from Port 3333
app.listen(3333);