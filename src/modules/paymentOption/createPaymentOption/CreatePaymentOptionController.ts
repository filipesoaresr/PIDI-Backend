import { Request, Response } from 'express';
import { CreatePaymentOptionUseCase } from './CreatePaymentOptionUseCase';

export class CreatePaymentOptionController {

    async handle(request: Request, response: Response) {


        const { name, flag, installment } = request.body;

        const createPaymentOptionUseCase = new CreatePaymentOptionUseCase();

        const result = await createPaymentOptionUseCase.execute({
            name,
            flag,
            installment
        });
        return response.json(result);
    }
}