const { getEducation, postEducation, deleteHandler } = require('../controllers/education_controller');

// Options for get all education
const getEducationOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                projects: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        type: { type: 'string' },
                        field: { type: 'string' },
                        logo: { type: 'string' },
                        startDate: { type: 'array' },
                        endDate: { type: 'array' },
                    },
                },
            },
        }
    },
    handler: getEducation,
}

// Options for add education
const postEducationOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type: 'string' },
                },
            }
        }
    },
    handler: postEducation,
}

// Options for delete skills
const deleteEducation = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type: 'string' },
                },
            }
        }
    },
    handler: deleteHandler,
}


function educationRoutes(fastify, options, done) {

    // GET ALL EDUCATION
    fastify.get('/education', getEducationOpts);

    // ADD EDUCATION
    fastify.post('/education', postEducationOpts);

    // DELETE EDUCATION
    fastify.delete('/education/:id', deleteEducation);

    done();
};

module.exports = educationRoutes;