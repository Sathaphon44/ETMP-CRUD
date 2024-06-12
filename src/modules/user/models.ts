export interface UserModel {
    id: string;
    email: string;
    username: string;
    password: string;
    create_at: Date;
    update_at: Date;
    role: "user" | "admin";
};

export type CreateUser = Omit<UserModel, "update_at" | "create_at">;
export type GetUser = Omit<UserModel, "password">;