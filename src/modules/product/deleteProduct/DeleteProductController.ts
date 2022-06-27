import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';


export class DeleteProductController {

    async handle(request: Request, response: Response) {
        const { id: id_product } = request.params;

        const deleteProductUseCase = new DeleteProductUseCase();
        const deletedProduct = await deleteProductUseCase.execute({
            id_product
        });
        console.log("Product deleted!");
        console.log(deletedProduct)
        return response.json(deletedProduct);
    }
}