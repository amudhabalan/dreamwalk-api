const express = require('express');
const app = express();

app.listen(5000, () => console.log('Running'));

// Database Connection
const connectDB = require('./config/db');
connectDB();

// Routing
app.use('/api/posts', require('./router/api/posts'));
