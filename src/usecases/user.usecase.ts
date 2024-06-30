
import { ICreateUser, IUser, IUserRepository } from "../interfaces/user.interface.js";
import { UserRepository } from "../repositories/user.repository.js";

class UserUseCase {
  private userUseCase: IUserRepository

  constructor() {
    this.userUseCase = new UserRepository()
  }

  async create({name, email, password}: ICreateUser): Promise<IUser> {
    const result = await this.userUseCase.create({name, email, password})

    return result
  }

  async getUsers(): Promise<IUser[]> {
    const result = await this.userUseCase.getUsers()
    return result
  }

  async update(id: string, { name, email, password }: ICreateUser): Promise<IUser> {
    const result = await this.userUseCase.update(id, {
      name,
      email,
      password,
    })

    return result
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userUseCase.delete(id)
    return result
  }

  
}

export { UserUseCase }