// GEORGE ALTERAÇÃO
import { prisma } from '../../../database/prismaClient';

interface IProductInOrder {
    pp: number,
    p: number,
    m: number,
    g: number,
    gg:number,
    fk_id_product: string,
    hasPromotion: false,
    order_product_value:number
    
}

type Product_in_order_prop =  {
  id: string,
  product_type: string,
  collection: string,
  name: string,
  value: number,
  pp: number,
  p: number,
  m: number,
  g: number,
  gg: number,
  id_promotion?: null
}


export class ValidateOrderQnt {

    async execute({
        pp,
        p ,
        m ,
        g ,
        gg,
        fk_id_product
    }: IProductInOrder) {

        try {
            // para validar, primeiro busco o produto
            const product_in_order =<Product_in_order_prop> await prisma.product.findFirst({
                
                where: {
                    id: {
                        equals: fk_id_product,
                        mode: 'insensitive',
                    }
                }
            });
            //pego os tamanhos da order e do produto
            
            
            console.log(product_in_order,"product_in_order")

            var size_pp = product_in_order.pp 
            var size_p = product_in_order.p
            var size_m = product_in_order.m
            var size_g = product_in_order.g
            var size_gg = product_in_order.gg

            var size_pp_final =size_pp - pp
            var size_p_final = size_p  - p 
            var size_m_final = size_m  - m 
            var size_g_final = size_g  - g 
            var size_gg_final =size_gg - gg

            // verifico se algum vai dar menos que 0

            if(
                size_pp_final <0 ||
                size_p_final <0 ||
                size_m_final <0 ||
                size_g_final <0 ||
                size_gg_final<0
            ){
                // se tiver algum menor que zero, retorna falso
                console.log("NÃO É PRA PASSAR, TEM TAMANHO MENOR")
                return false


            }
            //caso contrário não faz nada
            

            if (product_in_order) {
                throw new Error("Order already Exists!")
            }
            
        }
        catch (err) {
            console.log(err);
        }
        
    }
}



// GEORGE ALTERAÇÃO