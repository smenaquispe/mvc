import { UserService } from "../model/service/User.service";

export class UserController {

    private service: UserService;

    constructor(service: UserService) {
        this.service = service;
    }

    // aqui implementamos ruta
    get() {
    }
}