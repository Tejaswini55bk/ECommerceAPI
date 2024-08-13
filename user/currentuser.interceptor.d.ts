import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { UserService } from './user.service';
export declare class CurrentuserInterceptor implements NestInterceptor {
    private userintercept;
    constructor(userintercept: UserService);
    intercept(context: ExecutionContext, handler: CallHandler): Promise<import("rxjs").Observable<any>>;
}
