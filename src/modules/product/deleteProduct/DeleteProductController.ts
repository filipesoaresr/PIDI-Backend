import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';


export class DeleteProductController {

    async handle(request: Request, response: Response) {
        const { id: id_product } = request.params;

        const deleteProductUseCase = new DeleteProductUseCase();
        const deletedProduct = deleteProductUseCase.execute({
            id_product
        });
        console.log("Product deleted!");
        return response.json(deletedProduct);
    }
}