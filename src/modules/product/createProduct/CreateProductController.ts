import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase';


export class CreateProductController {

    async handle(request: Request, response: Response) {

        const {
            product_type,
            name,
            collection,
            date_created,
            value,
            promotion
        } = request.body;


        const createProductUseCase = new CreateProductUseCase();

        const result = await createProductUseCase.execute({
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