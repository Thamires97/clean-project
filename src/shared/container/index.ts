import { container } from "tsyringe";
import { InMemoryUserRepository } from "../../infra/database/in-memory-user-repository";
import { IUserRepository } from "../../domain/repositories/user-repository";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  InMemoryUserRepository
);
