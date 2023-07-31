import { UserRepository } from "./User.repository";

// aqui con SQL (SET GET)
export class User implements UserRepository {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    add(): void {
        throw new Error("Method not implemented.");
    }
}