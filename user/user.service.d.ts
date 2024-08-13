import { User } from './user.entity';
import { userDto } from './dtos/createuser.dto';
import { UpdateUserDto } from './dtos/updateuser.dto';
export declare class UserService {
    private repos;
    constructor(repos: typeof User);
    create(create: Partial<userDto>): Promise<User>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneByPassword(password: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(attrs: Partial<UpdateUserDto>): Promise<[affectedCount: number]>;
    remove(email: string): Promise<number>;
}
