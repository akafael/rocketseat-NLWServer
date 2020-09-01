/**
 * Server Application
 */

import express from 'express';
import routes from './routes';

const app = express();

// Enable JSON
app.use(express.json());
app.use(routes);

// Add new rote
app.get('/users', (request, response) => {
    console.log("Hello HTTP");
    return response.json({message:"Hello World!"});
})

// List to HTTP Requests from Port 3333
app.listen(3333);