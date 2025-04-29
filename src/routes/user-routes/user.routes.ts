import { Router } from "express";
import { CreateUserUseCase } from "../../usecases/create-user/create-user";
import { InMemoryUserRepository } from "../../infra/database/in-memory-user-repository";

export const userRoutes = Router();
const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

userRoutes.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    await createUserUseCase.execute({ name, email });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error:" + error });
  }
});
