import { Request, Response } from "express";
import { UpdatePromotionUseCase } from './UpdatePromotionUseCase';

export class UpdatePromotionController {

    async handle(request: Request, response: Response) {

        const {
            name,
            startDate,
            endDate,
            discount,
            productsInPromo,
        } = request.body;

        const { id: id_promotion } = request.params;

        const updatePromotionUseCase = new UpdatePromotionUseCase();

        const result = await updatePromotionUseCase.execute({
            id_promotion,
            name,
            startDate,
            endDate,
            discount,
            productsInPromo,
        });

        return response.json(result);
    }
}