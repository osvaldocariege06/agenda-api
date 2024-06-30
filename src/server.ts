import 'dotenv/config'
import { fastify, FastifyInstance } from "fastify";
import { userRouter } from "./routes/user.router.js";

const app: FastifyInstance = fastify()

app.register(userRouter, {
  prefix: '/user',
})




app.listen({
  port: process.env.Port || 3000
}, () => console.log('server is running on port 3000 🎉🚀'))