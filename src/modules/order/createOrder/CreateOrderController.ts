import { Request, Response } from 'express'
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {

    async handle(request: Request, response: Response) {

        const {
            id,
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open
        } = request.body;


        const createOrderUseCase = new CreateOrderUseCase();

        const result = await createOrderUseCase.execute({
            id,
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open 
        });

        return response.json(result);
    }
}