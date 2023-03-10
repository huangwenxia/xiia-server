import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
export interface Response<T> {
    data: T
}

@Injectable()
export class HttpInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
        return next.handle().pipe(
            map((data: T) => {
                return { data, status: 200, timstamp: Date.now(), }
            })
        )
    }
}
