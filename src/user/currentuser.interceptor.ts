import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class CurrentuserInterceptor implements NestInterceptor {
  constructor(private userintercept: UserService) {}
  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};
    if (userId) {
      const user = await this.userintercept.findOne(userId);
      request.currentUser = user;
    }
    return handler.handle();
  }
}
