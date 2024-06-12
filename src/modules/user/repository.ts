import Database from "../../lib/database";
import { CreateUser, UserModel } from "./models";

class UserRepository {
    constructor(public db: Database) { }

    public async getUserById(id: string): Promise<UserModel | null> {
        const user = await this.db.prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return user;
    }


    public async createUser(newUser: CreateUser): Promise<UserModel> {
        const user: any = await this.db.prisma.user.create({
            data: {
                id: newUser.id,
                email: newUser.email,
                username: newUser.username,
                password: newUser.password,
                role: newUser.role,
                create_at: new Date(),
                update_at: new Date()
            }
        })
        return user
    }


    public async updateById(newData: UserModel): Promise<UserModel> {
        const { id, ...dataUser } = newData;
        const user = await this.db.prisma.user.update({
            where: {
                id: newData.id
            },
            data: {
                ...dataUser,
                update_at: new Date()
            }
        })
        return user
    }


    public async deleteById(id: string): Promise<UserModel> {
        const user = await this.db.prisma.user.delete({
            where: {
                id: id
            }
        })
        return user
    }
}



export default UserRepository;