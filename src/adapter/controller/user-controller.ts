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
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
