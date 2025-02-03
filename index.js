const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middlewere
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute)




//GET API
app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });



// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


// POST API
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

//UPDATE API

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             return res.status(404).json({ message: "Product no found" })
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// DELETE API

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);

//         if (!product) {
//             return res.status(404).json({ message: "Product no found" })
//         }

//         res.status(200).json({message: "Product deleted successfully"});

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })
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