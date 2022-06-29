import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {

    async handle(request: Request, response: Response) {

        const {
            name,
            username,
            password,
            phone,
            email,
            role
        } = request.body;

        const { id: id_user } = request.params;

        const updateUserUseCase = new UpdateUserUseCase();


        const result = await updateUserUseCase.execute({
            id_user,
            name,
            username,
            password,
            phone,
            email,
            role
        });
        return response.json(result);
    }
}