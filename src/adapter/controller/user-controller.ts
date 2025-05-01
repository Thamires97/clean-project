import { Request, Response } from "express";
import { CreateUserUseCase } from "../../usecases/create-user/create-user";

export class UserController {
    constructor(private userUseCase: CreateUserUseCase) { }

    async execute(request: Request, response: Response): Promise<void> {
        const {name, email} = request.body ;
        try {
            await this.userUseCase.createUser({name, email});
        } catch (error: any) {
            throw new Error(error);
        }
    }
}