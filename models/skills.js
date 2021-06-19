const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Skills = Schema({
    name: {
        type: String,
    },
    logo: {
        type: String,
    }
});

module.exports = mongoose.model("Skills", Skills);