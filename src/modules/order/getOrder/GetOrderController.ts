import { Request, Response } from 'express';
import { GetOrderUseCase } from './GetOrderUseCase';

export class GetOrderController {

    async handle(request: Request, response: Response) {

        // MUDEI A PORRA TODA

        const {id:id_order} = request.params;
        console.log(id_order, "ID DO CONTROLE")
        if (id_order===undefined){
        const getOrderUseCase = new GetOrderUseCase();

        const order = await getOrderUseCase.execute();

        return response.json(order);

        }
        else{
        const getOrderUseCase = new GetOrderUseCase();

        const order = await getOrderUseCase.executecomID(id_order);

        return response.json(order);

        }

        

    }
}