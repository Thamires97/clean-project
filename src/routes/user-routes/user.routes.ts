import { Router, Request, Response } from "express";
import { userController } from "../../index";

export const userRoutes = Router();

userRoutes.post("/", async (request: Request, response: Response) => {
  await userController.execute(request, response);
});
