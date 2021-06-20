const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Projects = Schema({
    projectName: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    projectImage: [
        String,
    ],
    projectLink: {
        type: String,
    },
    projectSlug: {
        type: String,
    },
    projectTags: [
        String,
    ],
});

module.exports = mongoose.model("Projects", Projects);
