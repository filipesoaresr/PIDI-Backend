import { Request, Response } from 'express';
import { CreatePromotionUseCase } from './CreatePromotionUseCase';

export class CreatePromotionController {

    async handle(request: Request, response: Response) {

        const {
            name,
            startDate,
            endDate,
            discount,
            products
        } = request.body

        const createPromotionUseCase = new CreatePromotionUseCase();

        const result = await createPromotionUseCase.execute({
            name,
            startDate,
            endDate,
            discount,
            products
        });
        return response.json(result);
    }
}