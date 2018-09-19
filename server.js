const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// DB- connection
mongoose.connect('mongodb://localhost/to-do', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// Public Front-End Folder
app.use(express.static('/client/public'));

// First MiddleWare
app.use(bodyParser.json());
// Route initialization
app.use('/api', require('./routes/api'));

// Listen port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});