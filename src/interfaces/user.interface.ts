export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  create: (data: ICreateUser) => Promise<IUser>
  getUsers: () => Promise<IUser[]>
  update: (id: string, data: ICreateUser) => Promise<IUser>
  delete: (id: string) => Promise<boolean>
}

