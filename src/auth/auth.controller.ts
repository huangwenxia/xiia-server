import { Controller, Get,
    Post,
    Body,
    BadRequestException,
    UseGuards,
    Req, } from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // 登录接口
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req: Request) {
        try {
            return this.authService.login(req.user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    // 查询个人信息
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    me(@Req() req: Request) {
        return req.user;
    }
}
