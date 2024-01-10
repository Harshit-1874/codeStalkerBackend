const mongoose = require("mongoose");

const saveCodeSchema = new mongoose.Schema({
    userID :{
        type : String,
        required: true,
        unique: true,
    },
    savedCodes : [
        {
            title : {
                type: String,
                required: true,
            },
            code : {
                type: String,
                required: true,
            },
            language : {
                type: String,
                enum: ["Python", "Java", "JavaScript","C","C++"],
                required: true,
            },
            date : {
                type: Date,
                default: Date.now(),
            },
        }
    ]
});

const savedCodes = mongoose.model("SavedCodes",saveCodeSchema);

module.exports = savedCodes;