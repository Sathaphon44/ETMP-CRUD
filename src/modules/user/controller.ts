import { Request, Response } from "express";
import UserRepository from "./repository";
import { CreateUser, UserModel } from "./models";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class UserController {
    constructor(private userRepository: UserRepository) { }


    public async getById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).send("id is required");
            }
            const userData = await this.userRepository.getUserById(id);
            if (!userData) {
                return res.status(200).json(userData);
            }
            const { password, ...newUserData } = userData;
            return res.status(200).json(newUserData);
        } catch (error: any) {
            console.log(error)
            return res.status(500).send("Something went wrong");
        }
    }


    public async createOne(req: Request, res: Response): Promise<any> {
        try {
            const { email, username, password, role }: CreateUser = req.body;
            if (!email || !username || !password) {
                return res.status(400).send("email, username and password are required");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser: CreateUser = {
                id: uuidv4(),
                email,
                username,
                password: hashedPassword,
                role
            }
            const userData = await this.userRepository.createUser(newUser);
            return res.status(200).json(userData);
        } catch (error: any) {
            console.log(error)
            return res.status(500).send("Something went wrong");
        }
    }


    public async updateById(req: Request, res: Response): Promise<any> {
        try {
            const newData: UserModel = req.body;
            if (!newData.id) {
                return res.status(400).send("id is required");
            }
            if (!newData.password && !newData.email && !newData.username && !newData.role) {
                return res.status(400).send("at least one field is required");
            }
            if (newData.password) {
                newData.password = await bcrypt.hash(newData.password, 10);
            }
            const userData = await this.userRepository.updateById(newData);
            return res.status(201).json(userData);
        } catch (error: any) {
            console.log(error)
            return res.status(500).send("Something went wrong");
        }
    }


    public async deleteById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).send("id is required");
            }
            const userData = await this.userRepository.deleteById(id);
            return res.status(200).json(userData);
        } catch (error: any) {
            console.log(error)
            return res.status(500).send("Something went wrong");
        }
    }
}


export default UserController;