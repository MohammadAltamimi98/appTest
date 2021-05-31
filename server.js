'use strict'

//define packages
//=====================//

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');



//require controller
//=====================//
const apicontrol = require('./controllers/apicontrol');
const crudcontrol = require('./controllers/crudcontrol');


//initialize server packages
//=====================//
const app = express();
const PORT = process.env.PORT || 8083;



mongoose.connect('mongodb://localhost:27017/art', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



//define middleware
//=====================//
app.use(cors());
app.use(express.json());



// endpoint
//=====================//
app.get('/', (req, res) => {
    res.send('is it live yet ?')
});

app.get('/art', apicontrol.getArtApi);


app.get('/art/favorite', crudcontrol.readArt);
app.post('/art/favorite', crudcontrol.createArt);
app.delete('/art/favorite/:slug', crudcontrol.deleteArt);
app.put('/art/favorite/:slug', crudcontrol.updateArt);




// port
app.listen(PORT)
