import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Assession } from './dtos/createuser.dto';
declare global {
  module Express {
    interface Request {
      currentUser?: User;
      session?: Assession;
    }
  }
  //  module Express {}
  // const Express: {
  //   Request: {
  //     currentUser?: User;
  //     session?: Assession;
  //   };
  // };
}
@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session || {};

    if (userId) {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;
    }
    next();
  }
}
