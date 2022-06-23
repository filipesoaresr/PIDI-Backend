import { Request, Response } from 'express'
import { UpdateOrderUseCase } from './UpdateOrderUseCase';

interface ISales {
    id: string;
    is_open: boolean;
}
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

    async handleSales(request: Request, response: Response) {

        const {is_open, date_submitted} = request.body;
        const { id: id } = request.params;

        const updateOrderUseCase = new UpdateOrderUseCase();

        const result = await updateOrderUseCase.executeSales(
            id,
            is_open,
            date_submitted
         );

        return response.json(result);
    }
}