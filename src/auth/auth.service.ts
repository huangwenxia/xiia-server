import { Injectable, BadRequestException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { LoginUserDto } from "@user/dto/login-user.dto"
import { UsersService } from "@users/users.service"
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    // 登录接口服务层
    async login(userInfo: UserStatusDTO) {
        const token = this.createToken(userInfo)

        return {
            userInfo,
            ...token
        }
    }
    createToken({ username, id: userId }: UserStatusDTO) {
        const token = this.jwtService.sign({ username, userId })
        const expires = process.env.expiresTime

        return {
            token,
            expires
        }
    }
}
