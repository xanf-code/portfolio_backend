const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Education = Schema({
    name: {
        type: String,
    },
    type: {
        type: String,

    },
    field: {
        type: String,

    },
    logo: {
        type: String,
    },
    startDate: {
        type: String,

    },
    endDate: {
        type: String,

    },
});

module.exports = mongoose.model("Education", Education);