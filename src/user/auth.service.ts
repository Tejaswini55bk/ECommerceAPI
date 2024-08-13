import { userDto } from './dtos/createuser.dto';
import { signinDto } from './dtos/signinDto';
import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class authservice {
  constructor(private auth: UserService) {}

  async signIn(signDto: signinDto) {
    const use = await this.auth.findOneByEmail(signDto.email);
    if (!use) {
      throw new Error('you are not a registered user');
    } else if (use.password !== signDto.password) {
      throw new Error('you have provided an incorrect password');
    } else {
      return use;
    }
  }
}
