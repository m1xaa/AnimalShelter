import { Role } from "./role";

export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    roles: Role[];
}