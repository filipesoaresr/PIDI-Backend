import { Request, Response } from "express";
import { UpdatePromotionUseCase } from './UpdatePromotionUseCase';

export class UpdatePromotionController {

    async handle(request: Request, response: Response) {

        const {
            name,
            start_date,
            end_date,
            discount,
            products,
        } = request.body;

        const { id: id_promotion } = request.params;

        const updatePromotionUseCase = new UpdatePromotionUseCase();

        const result = await updatePromotionUseCase.execute({
            id_promotion,
            name,
            start_date,
            end_date,
            discount,
            products,
        });
        console.log("RESULT id", id_promotion)
        console.log("RESULT name", name)
        console.log("RESULT start_date", start_date)
        console.log("RESULT end_date", end_date)
        console.log("RESULT discount", discount)
        console.log("RESULT products", products)
        return response.json(result);
    }
}