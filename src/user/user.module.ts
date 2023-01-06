import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserController } from "./user.controller"
import { usersSchema } from "./user.schema"
import { UserService } from "./user.service"

@Module({
    imports: [TypeOrmModule.forFeature([usersSchema])],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
