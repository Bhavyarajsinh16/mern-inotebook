const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017";

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

module.exports = connectToMongo;