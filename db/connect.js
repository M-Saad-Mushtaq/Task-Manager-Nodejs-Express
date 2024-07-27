const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const connectDB = () => {
    mongoose.connect(process.env.uri, {
         useNewUrlParser: true,
         useUnifiedTopology: true
    })
    .then(() => {console.log("DB Connected....")})
    .catch((err) => {console.log(err);})
}

module.exports = connectDB;