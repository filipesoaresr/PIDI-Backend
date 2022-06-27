import { Request, Response } from 'express';
import { GetOrderUseCase } from './GetOrderUseCase';

export class GetOrderController {

    async handle(request: Request, response: Response) {

        const getOrderUseCase = new GetOrderUseCase();

        const order = await getOrderUseCase.execute();

        return response.json(order);

    }


    async handleOne(request: Request, response: Response) {
        const { id: id } = request.params;

        const getOrderUseCase = new GetOrderUseCase();

        const order = await getOrderUseCase.executeOne(id);

        return response.json(order);

    }

    async handleSales(request: Request, response: Response) {
        const { start_date: start_date, end_date: end_date } = request.params;

        const getOrderUseCase = new GetOrderUseCase();

        const sales = await getOrderUseCase.executeSales(
            start_date,
            end_date 
        );

        return response.json(sales);

    }

    async handleSearch(request: Request, response: Response) {

        const { start_date: start_date, end_date: end_date } = request.params;

        const getOrderUseCase = new GetOrderUseCase();

        const orderResult = await getOrderUseCase.executeSearch(
            start_date,
            end_date 
        );
        console.log(orderResult);
        return response.json(orderResult);
    }



}