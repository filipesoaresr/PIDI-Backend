import { Request, Response } from 'express';
import { GetPaymentOptionsUseCase } from './GetPaymentOptionUseCase';

export class GetPaymentOptionsController {

    async handle(request: Request, response: Response) {

        const getPaymentOptionUseCase = new GetPaymentOptionsUseCase();

        const paymentOption = await getPaymentOptionUseCase.execute();

        return response.json(paymentOption);
    }
}