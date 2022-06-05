import { PrismaClient } from '@prisma/client'
import { products, sizes, sizesInProduct} from './data/data';

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  
 /*  await prisma.productHasSize.createMany({
    data: sizesInProduct
  }) 
 */
  const allProducts = await prisma.product.findMany({
    include: { product_has_size: { include: { size: true } } },
  })
  const result = allProducts.map((product) => {
    return { ...product, product_has_size: product.product_has_size.map((size) => size.size) }
  })
  console.log(JSON.stringify(result)) 
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })