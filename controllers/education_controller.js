const Education = require("../models/education");

const getEducation = async (req, res) => {
    try {
        const result = await Education.find({}, "-__v");
        res.code(200).send(
            result,
        );
    } catch (error) {
        console.log(error);
    }
};

const postEducation = async (req, res) => {
    try {
        const education = Education({
            name: req.body.name,
            type: req.body.type,
            field: req.body.field,
            logo: req.body.logo,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        })

        await education.save();
        res.code(200).send({
            status: 'ok',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { postEducation, getEducation }