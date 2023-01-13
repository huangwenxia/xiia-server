import { IsString, MinLength,IsEmail } from 'class-validator';
import validator from "validator";

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  username: string;

  @IsString()
  @MinLength(1)
  password: string;

  @IsString()
  @IsEmail({},{
    message:"邮箱格式错误"
  })
  email: string
}
