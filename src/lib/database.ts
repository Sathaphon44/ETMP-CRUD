import { PrismaClient } from "@prisma/client";

class Database {
    constructor(public prisma: PrismaClient) { }

    public async connect(): Promise<PrismaClient> {
        const prisma = new PrismaClient();
        await prisma.$connect()
            .then(() => {
                console.log('database connected')
            })
            .catch((error) => {
                console.log("database connect error", error)
            })
        return prisma;
    }
}


export default Database;