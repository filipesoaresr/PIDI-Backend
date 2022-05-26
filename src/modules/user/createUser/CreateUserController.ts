import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';


export class CreateUserController {

    async handle(request: Request, response: Response) {

        const {
            name,
            username,
            password,
            birth_date,
            phone,
            email,
            cpf,
            sex,
            date_created,
            role,
        } = request.body;


        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({
            name,
            username,
            password,
            birth_date,
            phone,
            email,
            cpf,
            sex,
            date_created,
            role,
        });
        return response.json(result);
    }
}
