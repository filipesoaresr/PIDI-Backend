import { Request, Response } from 'express';
import { GetProductsUseCase } from './GetProductsUseCase';

export class GetProductsController {

    async handle(request: Request, response: Response) {

        const getProductsUseCase = new GetProductsUseCase();

        const products = await getProductsUseCase.execute();

        return response.json(products);
    }

    async handleSearch(request: Request, response: Response) {

        const getProductsUseCase = new GetProductsUseCase();
        const {product_name: product_name} = request.params;

        const productsResult = await getProductsUseCase.executeSearch(
            product_name,
        );

        return response.json(productsResult);
    }
}