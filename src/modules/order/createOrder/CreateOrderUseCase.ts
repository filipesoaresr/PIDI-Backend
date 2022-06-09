import { prisma } from '../../../database/prismaClient';

interface IProductInOrder {
    pp: number,
    p: number,
    m: number,
    g: number,
    gg:number,
    fk_id_product: string,
    hasPromotion: false,

}

interface ICreateOrder {
    id: string;
    date_created: Date;
    fk_id_payment_options: string;
    fk_id_user: string;
    is_open: boolean;
    product_has_order:IProductInOrder[]
}


export class CreateOrderUseCase {

    async execute({
        id,
        date_created,
        fk_id_payment_options,
        fk_id_user,
        is_open,
        product_has_order
    }: ICreateOrder) {

        //Validar se o Pedido existe
        try {
            const orderExists = await prisma.order.findFirst({
                where: {
                    id: {
                        equals: id,
                        mode: 'insensitive',
                    }
                }
            });

            if (orderExists) {
                throw new Error("Order already Exists!")
            }
        }
        catch (err) {
            console.log(err);
        }


        //Salvar o Pedido
        try {


            const order = await prisma.order.create({

                data: {
                    date_created,
                    fk_id_payment_options,
                    fk_id_user,
                    is_open,
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



