const Skills = require("../models/skills");

const getSkills = async (req, res) => {
    try {
        const result = await Skills.find({}, "-__v");
        res.code(200).send(
            result,
        );
    } catch (error) {
        console.log(error);
    }
};

const postSkills = async (req, res) => {
    try {
        const skills = Skills({
            name: req.body.name,
            logo: req.body.logo,
        })

        await skills.save();
        res.code(200).send({
            status: 'ok',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { postSkills, getSkills }