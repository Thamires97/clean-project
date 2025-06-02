import "reflect-metadata";
import "./shared/container";
import express from "express";
import { userRoutes } from "./routes/user-routes/user.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
