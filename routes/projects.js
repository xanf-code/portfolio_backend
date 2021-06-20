const { getProjects, postProjects, getSingleProjects, deleteHandler } = require('../controllers/projects_controller');

// Options for get all projects
const getProjectsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                projects: {
                    type: 'object',
                    properties: {
                        projectName: { type: 'string' },
                        projectDescription: { type: 'string' },
                        projectImage: { type: 'array' },
                        projectLink: { type: 'string' },
                        projectSlug: { type: 'array' },
                        projectTags: { type: 'array' },
                    },
                },
            },
        }
    },
    handler: getProjects,
}

// Options for get all projects
const getSingleProjectsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                projects: {
                    type: 'object',
                    properties: {
                        projectName: { type: 'string' },
                        projectDescription: { type: 'string' },
                        projectImage: { type: 'array' },
                        projectLink: { type: 'string' },
                        projectSlug: { type: 'array' },
                        projectTags: { type: 'array' },
                    },
                },
            },
        }
    },
    handler: getSingleProjects,
}

// Options for add projects
const postProjectsOpts = {
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
    handler: postProjects,
}

// Options for delete skills
const deleteProject = {
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

function projectsRoutes(fastify, options, done) {

    // GET ALL PROJECTS
    fastify.get('/projects', getProjectsOpts);

    // GET Individual PROJECTS
    fastify.get('/projects/:slug', getSingleProjectsOpts);

    // ADD PROJECTS
    fastify.post('/projects', postProjectsOpts);

    // DELETE PROJECT
    fastify.delete('/projects/:id', deleteProject);

    done();
};

module.exports = projectsRoutes;