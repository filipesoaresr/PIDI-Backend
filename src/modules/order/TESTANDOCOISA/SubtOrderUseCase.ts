// GEORGE ALTERAÇÃO
import { prisma } from '../../../database/prismaClient';

interface Iproduct_has_order {
    pp: number,
    p: number,
    m: number,
    g: number,
    gg: number,
    order_product_value: number,
    fk_id_product: string,    
    fk_id_order: string,
    hasPromotion: boolean
}

type Order_prop ={
    id: string,
    fk_id_payment_options: string,
    fk_id_user: string,
    is_open: boolean,
    total_value:number,
    product_has_order:Iproduct_has_order[]

}

type Product_prop = {
    id: string,
    product_type: string,
    collection:string,
    name: string,
    date_created: Date,
    value: number,
    pp: number,
    p: number,
    m: number,
    g: number,
    gg: number,
    id_promotion?: null

}

export class SubOrderUseCase{
   async execute (id_order:string)  {
    var valor_total_order = 0
       try{
           const id = id_order
           
           const order =<Order_prop> await prisma.order.findFirst({
            where:{id:id}
            ,
            include:{product_has_order:true}
           })
           console.log("TESTE")
           console.log(order)
           
           var list_of_valid_products=[]
           for (var i of order.product_has_order){
               
                console.log(i.fk_id_product)
                var product =<Product_prop> await prisma.product.findFirst({
                    where:{id:i.fk_id_product}
                })
                console.log("=====================================PRODUCT ========================================")
                console.log(product)
                
                var product_name = product.name
                var product_pp = product.pp
                var product_p = product.p
                var product_m = product.m
                var product_g = product.g
                var product_gg = product.gg

                var order_pp = i.pp
                var order_p =  i.p
                var order_m =  i.m
                var order_g =  i.g
                var order_gg = i.gg

                var pp_final = product_pp - order_pp
                var p_final = product_p - order_p
                var m_final = product_m - order_m
                var g_final = product_g - order_g
                var gg_final = product_gg - order_gg

                console.log(pp_final)
                console.log(p_final )
                console.log(m_final )
                console.log(g_final )
                console.log(gg_final)

                if
                (
                    pp_final <0|| p_final <0|| m_final <0|| g_final <0|| gg_final <0
                )
                {
                    
                    return {
                        "status":"erro",
                        "erro":"Produto com mais order que em estoque",
                        "produto":product_name,
                        "pp_final":pp_final,
                        "p_final" :p_final ,
                        "m_final" :m_final ,
                        "g_final" :g_final ,
                        "gg_final":gg_final
                            }
                }
                else{
                    product.pp = pp_final
                    product.p = p_final
                    product.m = m_final
                    product.g = g_final
                    product.gg = gg_final
                    list_of_valid_products.push({
                        product
                        
                })
                valor_total_order += i.order_product_value * (i.pp + i.p + i.m + i.g + i.gg)
                }
                
                

           }

           
           
       }
       catch (err) {
        console.log(err)
    }
    return {
        "status":"ok",
        "produtos_list":list_of_valid_products,
        "total_order":valor_total_order
}
    
    
       
   }
   
}

// GEORGE ALTERAÇÃO