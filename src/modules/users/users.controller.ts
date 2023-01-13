import { Controller, Get ,Post,Body} from "@nestjs/common"
import { UsersService } from "./users.service"
import { User } from "./users.model"
import { CreateUserDto } from './users.dto';

@Controller("user")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("list")
    async findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }
    @Post("save")
    async save(@Body() body: CreateUserDto){
        return this.usersService.save(body)
    }
}
