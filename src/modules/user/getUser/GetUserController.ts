import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";


export class GetUserController {

    async handle(request: Request, response: Response) {


        const getUserUseCase = new GetUserUseCase();
        const users = await getUserUseCase.execute()

        return response.json(users);
    }
}