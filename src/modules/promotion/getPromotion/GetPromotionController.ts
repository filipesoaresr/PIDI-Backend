import { Request, Response } from 'express';
import { GetPromotionUseCase } from './GetPromotionUseCase';

export class GetPromotionController {

    async handle(request: Request, response: Response) {

        const getPromotionUseCase = new GetPromotionUseCase();

        const promotion = await getPromotionUseCase.execute();

        return response.json(promotion);

    }

    async handleSearch(request: Request, response: Response) {

        const getPromotionUseCase = new GetPromotionUseCase();
        const {promotion_name: promotion_name} = request.params;

        const promotionResult = await getPromotionUseCase.executeSearch(
            promotion_name,
        );

        return response.json(promotionResult);
    }
}