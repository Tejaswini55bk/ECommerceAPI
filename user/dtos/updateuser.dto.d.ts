import { userDto } from './createuser.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<userDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    name?: string;
    email?: string;
    password: string;
}
export {};
