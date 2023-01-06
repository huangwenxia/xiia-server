import { Controller, Get,Req } from "@nestjs/common"
import { UsersService } from "./users.service"
import { User } from "./users.model";

@Controller("user")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("list")
    async findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }
}
