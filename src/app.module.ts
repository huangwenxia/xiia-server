import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { User } from "./users/users.model"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "123456",
            database: "test",
            models: [User],
            autoLoadModels: true,
            synchronize: true,
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSource } from "typeorm"
import { UserModule } from "./user/user.module"
import { AuthModule } from './auth/auth.module';

// @Module({
//     imports: [
//         TypeOrmModule.forRoot({
//             type: "mysql",
//             host: "localhost",
//             port: 3306,
//             username: "root",
//             password: "root",
//             database: "test",
//             // entities: [User],
//             autoLoadEntities: true,
//             synchronize: true
//         }),
//         UserModule
//     ],
//     controllers: [AppController],
//     providers: [AppService]
// })
// export class AppModule {
//     constructor(private dataSource: DataSource) {
//         console.log("dataSource", dataSource)
//     }
// }
