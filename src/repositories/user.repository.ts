import { IUserRepository, ICreateUser, IUser } from "../interfaces/user.interface.js";
import { prisma } from "../database/prisma-client.js"

class UserRepository implements IUserRepository {
  async create({ name, email, password }: ICreateUser): Promise<IUser> {
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })

    return result
  }

  async getUsers(): Promise<IUser[]> {
    const result = await prisma.user.findMany()

    return result
  }

  async update(id: string, { name, email, password }: ICreateUser): Promise<IUser> {
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        password,
      }
    })

    return result
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: {
        id,
      }
    })

    return result ? true : false
  }
}

export { UserRepository }