import { prisma } from '../../../database/prismaClient';

interface IProductInOrder {
    product_name?: string;
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
    order_product_value: number,
    fk_id_product: string,
    hasPromotion: false,

}
interface ICreateOrder {
    //id: string;
    //date_created: Date;
    date_submitted: Date;
    fk_id_payment_options: string;
    fk_id_user: string;
    is_open: boolean;
    total_value: number;
    product_has_order:IProductInOrder[]
}


export class CreateOrderUseCase {

    async execute({
        //id,
        //date_created,
        date_submitted,
        fk_id_payment_options,
        fk_id_user,
        is_open,
        total_value,
        product_has_order
    }: ICreateOrder) {


        //Salvar o Pedido
        try {


            const order = await prisma.order.create({

                data: {
                    //date_created,
                    date_submitted,
                    fk_id_payment_options,
                    fk_id_user,
                    is_open,
                    total_value,
                    product_has_order: {
                        create: product_has_order

                    }
                    
                }
                
            });
            
            

            return order
        }
        catch (err) {
            console.log(err);
        }


    }
}



