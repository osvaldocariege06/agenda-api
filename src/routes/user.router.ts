import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase.js";
import { ICreateUser } from "../interfaces/user.interface.js";


export async function userRouter(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase()
  
  fastify.post<{ Body: ICreateUser }>('/', async(request, reply) => {
    const { name, email, password } = request.body
    try {
      const data = await  userUseCase.create({ name, email, password})
      return reply.send(data)
    } catch (error) {
      reply.send(error);
    }
  })

  fastify.get('/', async(request, reply) => {
    try {
      const data = await userUseCase.getUsers()

      return reply.send(data)
      
    } catch (error) {
      reply.send(error);
    }
  })

  fastify.put<{ Params: { id: string }, Body: ICreateUser }>('/:id', async(request, reply) => {
    const id = request.params.id
    const { name, email, password } = request.body
    try {
      const data = await userUseCase.update(id, { 
        name, 
        email, 
        password
       })
       return reply.send(data)
    } catch (error) {
      reply.send(error);
    }
  })

  fastify.delete<{ Params: { id: string } }>('/:id', async(request, reply) => {
    const id = request.params.id;
    try {
      const data = await userUseCase.delete(id)
    } catch (error) {
      reply.send(error);
    }
  })
}