import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../domain/repositories/user-repository";
import { User } from "../../domain/entities/user";
import { ICreateUserDTO } from "./user-dto";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async createUser(data: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);
    await this.userRepository.create(user);
  }
}
