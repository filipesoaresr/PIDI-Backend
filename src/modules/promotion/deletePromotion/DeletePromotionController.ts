import { Request, Response } from 'express';
import { DeletePromotionUseCase } from './DeletePromotionUseCase';


export class DeletePromotionController {

    async handle(request: Request, response: Response) {
        const { id: id_promotion } = request.params;

        const deletePromotionUseCase = new DeletePromotionUseCase();
        const deletedPromotion = await deletePromotionUseCase.execute({
            id_promotion
        });
        console.log("Promotion deleted!");
        return response.json(deletedPromotion);
    }
}