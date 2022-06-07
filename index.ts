import { PrismaClient } from '@prisma/client'
import { products, sizes, sizesInProduct} from './data/data';

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  
 /*  await prisma.productHasSize.createMany({
    data: sizesInProduct
  }) 
 */
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })