const express = require('express');
const cors = require('cors');
require ('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Backend is running!");
});

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    if(!error)
        console.log('Server is running on port', PORT);
    else
        console.log("Error, server can't start:", error);
});