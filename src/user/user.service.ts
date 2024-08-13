import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { userDto } from './dtos/createuser.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserDto } from './dtos/updateuser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private repos: typeof User) {}

  create(create: Partial<userDto>): Promise<User> {
    const res = this.repos.create(create);
    return res;
  }

  async findOne(id: number) {
    return await this.repos.findOne({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await this.repos.findOne({ where: { email } });
  }

  async findOneByPassword(password: string): Promise<User> {
    return await this.repos.findOne<User>({ where: { password } });
  }

  findAll() {
    return this.repos.findAll();
  }

  async update(attrs: Partial<UpdateUserDto>) {
    const use = await this.findOneByEmail(attrs.email);
    if (!use) {
      throw new BadRequestException('No such id present');
    }

    return await this.repos.update(attrs, { where: { email: attrs.email } });
  }

  async remove(email: string) {
    const use = await this.repos.findOne({ where: { email } });
    if (!use) {
      throw new BadRequestException('No such id present');
    }
    return this.repos.destroy({ where: { email } });
  }
}
