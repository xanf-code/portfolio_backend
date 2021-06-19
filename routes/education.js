const { getEducation, postEducation } = require('../controllers/education_controller');

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

function educationRoutes(fastify, options, done) {

    // GET ALL PROJECTS
    fastify.get('/education', getEducationOpts);

    // ADD PROJECTS
    fastify.post('/education', postEducationOpts);

    done();
};

module.exports = educationRoutes;