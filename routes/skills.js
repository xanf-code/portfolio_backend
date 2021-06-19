const { getSkills, postSkills, deleteHandler } = require('../controllers/skills_controller');

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

// Options for delete skills
const deleteSkills = {
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

function SkillsRoutes(fastify, options, done) {

    // GET ALL SKILLS
    fastify.get('/skills', getSkillsOpts);

    // ADD SKILLS
    fastify.post('/skills', postSkillsOpts);

    // DELETE SKILLS
    fastify.delete('/skills/:id', deleteSkills);

    done();
};

module.exports = SkillsRoutes;