import { Request, Response } from "express";
import { CreateUserUseCase } from "../../usecases/create-user/create-user";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase
  ) {}

  async execute(request: Request, response: Response): Promise<void> {
    const { name, email } = request.body;
    try {
      await this.createUserUseCase.createUser({ name, email });
      response.status(201).json({ message: "User created successfully" });
    } catch (error: any) {
      response.status(400).json({ error: error.message || "Unexpected error" });
    }
  }
}
