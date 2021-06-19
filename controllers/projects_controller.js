const Projects = require("../models/projects");

const getProjects = async (req, res) => {
    try {
        const result = await Projects.find({}, "-__v");
        res.code(200).send(
            result,
        );
    } catch (error) {
        console.log(error);
    }
};

const postProjects = async (req, res) => {
    try {
        const projects = Projects({
            projectName: req.body.projectName,
            projectDescription: req.body.projectDescription,
            projectSlug: req.body.projectSlug,
            projectImage: req.body.projectImage,
            projectLink: req.body.projectLink,
            projectTags: req.body.projectTags,
        })

        await projects.save();
        res.code(200).send({
            status: 'ok',
        });
    } catch (error) {
        console.log(error);
    }
};

const getSingleProjects = async (req, res) => {
    try {
        const result = await Projects.find({ projectSlug: req.params.slug }, "-__v");
        res.code(200).send(
            result,
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getProjects, postProjects, getSingleProjects }