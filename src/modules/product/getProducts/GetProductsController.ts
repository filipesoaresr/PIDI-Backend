import { Request, Response } from 'express';
import { GetProductsUseCase } from './GetProductsUseCase';

export class GetProductsController {

    async handle(request: Request, response: Response) {

        const getProductsUseCase = new GetProductsUseCase();

        const products = await getProductsUseCase.execute();

        return response.json(products);
    }
}