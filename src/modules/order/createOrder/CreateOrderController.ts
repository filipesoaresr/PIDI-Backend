import { Request, Response } from 'express'
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {

    async handle(request: Request, response: Response) {

        const {
            id,
            date_created,
            date_submitted,
            fk_id_payment_options,
            fk_id_user,
            is_open,
            product_has_order
        } = request.body;

        const createOrderUseCase = new CreateOrderUseCase();

        const result = await createOrderUseCase.execute({
            id,
            date_created,
            date_submitted,
            fk_id_payment_options,
            fk_id_user,
            is_open,
            product_has_order
        });

        return response.json(result);
    }
}
// {
//     "fk_id_payment_options": "09c50ec6-627c-45ef-91a8-7179d7113c9a",
//      "fk_id_user": "05fdcb49-0fff-4375-b72e-f69e3375e42c",
//       "is_open": false,
//        "product_has_order": [
//         {
//           "pp": 79,
//           "p":  79,
//           "m":  79,
//           "g":  79,
//           "gg": 79,
//           "fk_id_product": "6cea593f-2497-42eb-bf5c-68f0184ce4e5",
//           "hasPromotion": false
//       },
//       {
//          "pp": 58,
//          "p": 58,
//          "m": 58,
//          "g": 58,
//          "gg": 58,
//          "fk_id_product": "3a7c43f9-c376-4823-ad4d-3873b56d5f75",
//          "hasPromotion": false
//                     },
//                      {
// 											"pp": 18,
//                         "p": 18,
//                         "m": 18,
//                         "g": 18,
//                         "gg": 51,
//                         "fk_id_product": "13832ae7-9f84-4d48-a756-64aab162794c",
//                         "hasPromotion": false
// 										}
//                 ]

// }


