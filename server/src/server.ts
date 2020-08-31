/**
 * Server Application
 */

import express from 'express';

const app = express();


// Add 
app.get('/users', (request, response) => {
    console.log("Hello HTTP");
    return response.send("Hello World!");
})

// List to HTTP Requests from Port 3333
app.listen(3333);