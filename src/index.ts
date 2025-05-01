import { UserController } from "./adapter/controller/user-controller"
import { InMemoryUserRepository } from "./infra/database/in-memory-user-repository";
import { CreateUserUseCase } from "./usecases/create-user/create-user"

const userUseCase = new CreateUserUseCase(InMemoryUserRepository.getInstance());
const userController = new UserController(userUseCase);

export { userController }
