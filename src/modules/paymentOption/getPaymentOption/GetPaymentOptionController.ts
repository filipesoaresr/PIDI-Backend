import { Request, Response } from 'express';
import { GetPaymentOptionsUseCase } from './GetPaymentOptionUseCase';

export class GetPaymentOptionsController {

    async handle(request: Request, response: Response) {

        const getPaymentOptionUseCase = new GetPaymentOptionsUseCase();

        const paymentOption = await getPaymentOptionUseCase.execute();

        return response.json(paymentOption);
    }

    async handleSearch(request: Request, response: Response) {

        const getPaymentOptionUseCase = new GetPaymentOptionsUseCase();

        const {payment_option_name: payment_option_name} = request.params;

        const paymentOptionResult = await getPaymentOptionUseCase.executeSearch(
            payment_option_name,
        );

        return response.json(paymentOptionResult);
    }
}