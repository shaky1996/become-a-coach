const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');


const authRoute = require('./routes/auth.js')
const listingRoutes = require('./routes/listing.js');


app.use(cors());
app.use(express.json())
app.use(express.static('public'))

//Routes
app.use('/auth', authRoute)
app.use('/listing', listingRoutes);



//Mongoose Setup
const PORT = 3001;
mongoose
    .connect(process.env.MONGO_URL, {
        dbName: 'BecomeACoach',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));