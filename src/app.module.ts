import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "@modules/users/users.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import configuration from "./config/configuration"
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env.development"],
            load: [configuration]
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return configService.get("database")
            }
        }),
        UsersModule
        // AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

