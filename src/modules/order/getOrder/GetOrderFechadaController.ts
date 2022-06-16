import { Request, Response } from 'express';
import { GetOrderFechadaUseCase } from './GetOrderFechadaUseCase';

export class GetOrderFechadaController {

    async handle(request: Request, response: Response) {

        // MUDEI A PORRA TODA
        const getOrderFechadaUseCase = new GetOrderFechadaUseCase();

        const orderFechada = await getOrderFechadaUseCase.execute();

        return response.json(orderFechada);


        

    }
}