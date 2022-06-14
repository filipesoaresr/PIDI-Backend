import { Request, Response } from 'express';
import { DeletePaymentUseCase } from './DeletePaymentOptionUseCase';


export class DeletePaymentOptionController {

    async handle(request: Request, response: Response) {
        const { id: id_payment } = request.params;

        const deletePaymentUseCase = new DeletePaymentUseCase();
        const deletedPayment = deletePaymentUseCase.execute({
            id_payment
        });
        console.log("Payment Option deleted!");
        return response.json(deletedPayment);
    }
}