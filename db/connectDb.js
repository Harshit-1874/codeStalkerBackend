const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async() =>{
    try{
        await mongoose.connect(
            process.env.link
        );
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;