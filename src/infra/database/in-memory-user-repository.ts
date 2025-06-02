import { IUserRepository } from "../../domain/repositories/user-repository";
import { User } from "../../domain/entities/user";
import { injectable } from "tsyringe";

@injectable()
export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];
  // private static INSTANCE: InMemoryUserRepository;

  // public static getInstance(): InMemoryUserRepository {
  //   if (!InMemoryUserRepository.INSTANCE) {
  //     return new InMemoryUserRepository();
  //   }

  //   return InMemoryUserRepository.INSTANCE;
  // }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user ?? null;
  }
}
