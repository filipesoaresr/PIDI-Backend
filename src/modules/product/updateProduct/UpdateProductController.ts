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
            pp,
            p,
            m,
            g,
            gg,
            id_promotion
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
            pp,
            p,
            m,
            g,
            gg,
            id_promotion
        });
        return response.json(result);

    }
}