import { Request, Response } from 'express'
import { SubOrderUseCase } from './SubtOrderUseCase';

export class SubOrderController{

    
   async handle(request:Request , response : Response) 
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