import { Router, Request, Response } from "express";
// import { UserController } from "../../index";
import { UserController } from "../../adapter/controller/user-controller";
import { container } from "tsyringe";

export const userRoutes = Router();

const userController = container.resolve(UserController);

userRoutes.post("/", async (request: Request, response: Response) => {
  await userController.execute(request, response);
});
