import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common"
import { Request, Response } from "express"

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const status = exception.getStatus()
        console.log('异常',exception)
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            msg: exception.message,
            path: request.url
        })
    }
}
