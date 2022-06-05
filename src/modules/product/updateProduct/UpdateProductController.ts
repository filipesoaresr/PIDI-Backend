import { Request, Response } from 'express';
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {

    async handle(request: Request, response: Response) {

        const {
            product_type,
            name,
            collection,
            date_created,
            value,
            promotion
        } = request.body;

        const { id: id_product } = request.params;

        const updateProductUseCase = new UpdateProductUseCase();

        const result = await updateProductUseCase.execute({
            id_product,
            product_type,
            name,
            collection,
            date_created,
            value,
            promotion
        });
        return response.json(result);

    }
}