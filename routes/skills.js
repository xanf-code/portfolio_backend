const { getSkills, postSkills } = require('../controllers/skills_controller');

// Options for get all skills
const getSkillsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                projects: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        logo: { type: 'string' },
                    },
                },
            },
        }
    },
    handler: getSkills,
}

// Options for add skills
const postSkillsOpts = {
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
    handler: postSkills,
}

function SkillsRoutes(fastify, options, done) {

    // GET ALL PROJECTS
    fastify.get('/skills', getSkillsOpts);

    // ADD PROJECTS
    fastify.post('/skills', postSkillsOpts);

    done();
};

module.exports = SkillsRoutes;