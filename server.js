const fastify = require('fastify')({ logger: true });
const mongoose = require("mongoose");

fastify.register(require('./routes/projects'))
fastify.register(require('./routes/education'))
fastify.register(require('./routes/skills'))

//DotEnv
require('dotenv').config();
let mongoURL = process.env.MongoDB_URL;

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3001, '0.0.0.0',);
        //Mongo Connection
        mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        const connection = mongoose.connection;
        connection.once("open", () => {
            console.log("MpongoDB is connected");
        });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();