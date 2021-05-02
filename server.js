const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express();

const db = require('./config/keys_dev').mongoURI
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB is connected'))



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is running on port ============> ${port}...`)
})