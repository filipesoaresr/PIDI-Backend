import { Request, Response } from 'express'
import { SubOrderUseCase } from './ServiceProductAmount';
import { UpdateOrderUseCase } from './UpdateOrderUseCase';

interface ISales {
    id: string;
    is_open: boolean;
}
export class UpdateOrderController {

    async handle(request: Request, response: Response) {

        const {
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open
        } = request.body;

        const { id: id } = request.params;

        const updateOrderUseCase = new UpdateOrderUseCase();

        const result = await updateOrderUseCase.execute({
            id,
            date_created,
            fk_id_payment_options,
            fk_id_user,
            is_open 
        });

        return response.json(result);
    }

    async handleSales(request: Request, response: Response) {

        const {is_open, date_submitted} = request.body;
        const { id: id } = request.params;

        const updateOrderUseCase = new UpdateOrderUseCase();
        const subOrderUseCase = new SubOrderUseCase();


       

        const result2 = await subOrderUseCase.execute(id);
        if(result2.status == "ok"){

            const result = await updateOrderUseCase.executeSales(
                id,
                is_open,
                date_submitted
            );

            console.log("Result02 quando ok", result2)
            console.log("Result", result)
            return response.json(result);
            }
            else {
                console.log("Result02", result2)
                return response.json(result2);
            }
        
        
    }

    async handleSubOrder(request:Request , response : Response) 
   {
        const {id:id_order} = request.params;
       const subOrderUseCase = new SubOrderUseCase();

       const result = await subOrderUseCase.execute(id_order);
       console.log(result)
       if(result.status == "ok"){
         return response.json(result);
       }
       return response.json(result);
   }

}