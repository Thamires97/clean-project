import { v4 as uuidv4 } from "uuid";
import { ICreateUserDTO } from "../../usecases/create-user/user-dto";

export class User {
  public readonly id: string;
  public name: string;
  public email: string; 

  constructor({ name, email }: ICreateUserDTO) {
    this.name = name;
    this.email = email;
    this.id = uuidv4();
  }


}