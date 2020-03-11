const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// Models
require('./models/Project')
require('./models/User')

// Routes
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(require('./routes'));
app.use(cors());

// Connect to db
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('open', function(){
    console.log('MongoDB Connected');
})

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
})

