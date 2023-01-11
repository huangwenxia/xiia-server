import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ConfigService } from '@nestjs/config';
import { HttpInterceptor } from '@shared/interceptor/http.interceptor';
import { HttpExceptionFilter } from '@shared/filters/http-exception.filter';
async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService);
    //全局错误拦截器
    app.useGlobalFilters(new HttpExceptionFilter());
    // 全局注册拦截器
    app.useGlobalInterceptors(new HttpInterceptor());
    app.setGlobalPrefix('api');
    await app.listen(configService.get('port') || 3000)
}
bootstrap()
