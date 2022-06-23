import { Request, Response } from 'express';
import { GetSalesUseCase } from './GetSaleUseCase';

export class GetPromotionController {

    async handle(request: Request, response: Response) {

        const getSalesUseCase = new GetSalesUseCase();

        const sales = await getSalesUseCase.execute();

        return response.json(sales);

    }
}