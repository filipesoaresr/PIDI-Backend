import { prisma } from '../../../database/prismaClient';


export class GetSalesUseCase {

    async execute() {

        try {
            const sales = await prisma.promotion.findMany();
            return sales
        }
        catch (err) {
            console.log(err)
        }
    }

}