import { userDto } from './dtos/createuser.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/updateuser.dto';
import { authservice } from './auth.service';
import { signinDto } from './dtos/signinDto';
export declare class UserController {
    private repo;
    private auth;
    constructor(repo: UserService, auth: authservice);
    createUser(body: userDto): Promise<import("./user.entity").User>;
    signuser(body: signinDto, session: any): Promise<import("./user.entity").User>;
    signOut(session: any): string;
    who(session: any): Promise<import("./user.entity").User>;
    getbymail(email: string): Promise<import("./user.entity").User>;
    getbypass(password: string): Promise<import("./user.entity").User>;
    updateuser(body: Partial<UpdateUserDto>): Promise<[affectedCount: number]>;
    delete(body: signinDto): Promise<number>;
}
