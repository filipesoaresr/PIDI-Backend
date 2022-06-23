import { Request, Response } from 'express';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';


export class DeleteOrderController {

    async handle(request: Request, response: Response) {
        const { id: id_order } = request.params;

        //const { id: fk_id_order } = request.body;

        const deleteOrderUseCase = new DeleteOrderUseCase();
        const deletedOrder = deleteOrderUseCase.execute({
            id_order,
        });
        console.log("Product deleted!");
        return response.json(deletedOrder);
    }
}