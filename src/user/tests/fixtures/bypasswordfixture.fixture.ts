import { User } from "../../user.entity";

export const passwordFixture: User = {
    id: 2,
    email: 'abc@abc.com',
    password: 'abc',
    gender:"male",
} as unknown as User