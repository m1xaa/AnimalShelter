import { Role } from "../as-is/role";

export interface RegistrationRequest {
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    roles: Role[];
}