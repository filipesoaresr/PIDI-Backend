import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUserCase';

export class DeleteUserController {

    async handle(request: Request, response: Response) {
        const { id: id_user } = request.params;

        const deleteUserUseCase = new DeleteUserUseCase();
        const deletedUser = deleteUserUseCase.execute({
            id_user
        });
        console.log("User deleted!");
        return response.json(deletedUser);
    }
}