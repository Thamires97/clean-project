import { IUserRepository } from "../../domain/repositories/user-repository";
import { User } from "../../domain/entities/user";
import { ICreateUserDTO } from "./user-dto";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async createUser(data: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);
    await this.userRepository.create(user);
  }
}
