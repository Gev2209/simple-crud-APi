const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const cors = require('cors');
const app = express()

//middlewere
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors());
//routes
app.use('/api/products', productRoute)

//GET API
app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

mongoose.connect('mongodb://GevBack:OsUuPtJAi5TOhz7F@crudapi-shard-00-00.6rec9.mongodb.net:27017,crudapi-shard-00-01.6rec9.mongodb.net:27017,crudapi-shard-00-02.6rec9.mongodb.net:27017/?ssl=true&replicaSet=atlas-w6idpi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=CRUDAPI')

    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is runing on port 3000');

        });
    })
    .catch((err) => {
        console.log('Connection failed', err);

    });