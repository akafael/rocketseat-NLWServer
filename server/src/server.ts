/**
 * Server Application
 */

import express from 'express';

const app = express();

// Enable JSON
app.use(express.json());

// Add new rote
app.get('/users', (request, response) => {
    console.log("Hello HTTP");
    return response.json({message:"Hello World!"});
})

// List to HTTP Requests from Port 3333
app.listen(3333);