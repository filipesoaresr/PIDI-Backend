import { Request, Response } from 'express';
import { CreatePromotionUseCase } from './CreatePromotionUseCase';

export class CreatePromotionController {

    async handle(request: Request, response: Response) {

        const {
            name,
            //startDate,
            end_date,
            discount,
            products
        } = request.body

        const createPromotionUseCase = new CreatePromotionUseCase();

        const result = await createPromotionUseCase.execute({
            name,
            //startDate,
            end_date,
            discount,
            products
        });
        return response.json(result);
    }
}