import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Session,
} from '@nestjs/common';
import { userDto } from './dtos/createuser.dto';
import { UserService } from './user.service';
import { Query } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateuser.dto';
import { authguard } from './auth.guard';
import { CurrentuserInterceptor } from './currentuser.interceptor';
import { BadRequestException } from '@nestjs/common';
import { authservice } from './auth.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { signinDto } from './dtos/signinDto';
@Controller('user')
@UseInterceptors(CurrentuserInterceptor)
export class UserController {
  constructor(
    private repo: UserService,
    private auth: authservice,
  ) { }

  @Post('/signup')
  @UseInterceptors(ClassSerializerInterceptor)
  async createUser(@Body() body: userDto) {
    try {
      const users = await this.repo.findOneByEmail(body.email);
      if (users) {
        //if user already exists
        throw new BadRequestException();
      }
      return this.repo.create(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user signup error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post('signin')
  @UseGuards(authguard)
  @UseInterceptors(ClassSerializerInterceptor)
  async signuser(@Body() body:signinDto, @Session() session: any) {
    try {
      const signed = await this.auth.signIn(body);
      session.userId = signed.id;
      return signed;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user signin error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post('/signout')
  @UseInterceptors(ClassSerializerInterceptor)
  signOut(@Session() session: any) {
    try {
      session.userId = null;
      return 'successfully signed out the recent signed in user.';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user signout error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/who')
  @UseGuards(authguard)
  @UseInterceptors(ClassSerializerInterceptor)
  who(@Session() session: any) {
    try {
      return this.repo.findOne(session.userId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user authentication error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('byemail')
  @UseGuards(authguard)
  @UseInterceptors(ClassSerializerInterceptor)
  getbymail(@Query('email') email: string) {
    try {
      return this.repo.findOneByEmail(email);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user get by mail error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('bypassword')
  @UseGuards(authguard)
  getbypass(@Query('password') password: string) {
    try {
      return this.repo.findOneByPassword(password);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user get by password error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Patch('update')
  @UseGuards(authguard)
  @UseInterceptors(ClassSerializerInterceptor)
  updateuser(@Body() body: Partial<UpdateUserDto>) {
    try {
      return this.repo.update(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user update error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post('del')
  @UseGuards(authguard)
  delete(@Body() body:signinDto) {
    try {
      return this.repo.remove(body.email);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a user deletion error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
