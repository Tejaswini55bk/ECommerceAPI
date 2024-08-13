import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Assession } from './dtos/createuser.dto';
declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
            session?: Assession;
        }
    }
}
export declare class CurrentUserMiddleware implements NestMiddleware {
    private usersService;
    constructor(usersService: UserService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
