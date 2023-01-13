import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { HttpInterceptor } from '@shared/interceptor/http.interceptor';
import { HttpExceptionFilter } from '@shared/filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService);
    //全局数据校验管道
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    //全局错误过滤器
    app.useGlobalFilters(new HttpExceptionFilter());
    // 全局接口拦截器
    app.useGlobalInterceptors(new HttpInterceptor());
    app.setGlobalPrefix('api');
    const port = configService.get('port') || 3000;
    await app.listen(port)
    console.log('服务已启动...http://localhost:'+port)
}
bootstrap()
