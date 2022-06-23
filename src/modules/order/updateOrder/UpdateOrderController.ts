import { Request, Response } from 'express'
import { UpdateOrderUseCase } from './UpdateOrderUseCase';

export class UpdateOrderController {

    async handle(request: Request, response: Response) {

        const {
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open
        } = request.body;

        const { id: id } = request.params;

        const updateOrderUseCase = new UpdateOrderUseCase();

        const result = await updateOrderUseCase.execute({
            id,
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open 
        });

        return response.json(result);
    }
}