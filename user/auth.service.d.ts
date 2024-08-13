import { signinDto } from './dtos/signinDto';
import { UserService } from './user.service';
export declare class authservice {
    private auth;
    constructor(auth: UserService);
    signIn(signDto: signinDto): Promise<import("./user.entity").User>;
}
