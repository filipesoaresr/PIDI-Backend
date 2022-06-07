import { Request, Response } from 'express';
import { GetOrderUseCase } from './GetOrderUseCase';

export class GetOrderController {

    async handle(request: Request, response: Response) {

        const getOrderUseCase = new GetOrderUseCase();

        const order = await getOrderUseCase.execute();

        return response.json(order);

    }
}