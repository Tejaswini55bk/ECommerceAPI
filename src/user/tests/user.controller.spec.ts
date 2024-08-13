import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { authservice } from '../auth.service';
import { userFixture } from './fixtures/userfixture.fixture';
import { passwordFixture } from './fixtures/bypasswordfixture.fixture';
describe('UserController', () => {
  let controller: UserController;
  let fakeuserservice: Partial<UserService>;
  let fakeauthservice: Partial<authservice>;
  beforeEach(async () => {
    fakeuserservice = {
      findOne: (id: number) => {
        return Promise.resolve(userFixture);
      },
      findOneByEmail:(email:string) => {
          return Promise.resolve(userFixture);
      },
      findOneByPassword:(password:string) => {
        return Promise.resolve(passwordFixture);
      },
    };
    fakeauthservice = {
      // signUp: () => {};
      signIn: (userDto) => {
        return Promise.resolve(userFixture);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: fakeuserservice,
        },
        {
          provide: authservice,
          useValue: fakeauthservice,
        },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('findAllUsers returs list of users with given email', async () => {
    const users = await controller.getbymail('ab@ab.com');
    expect(users).toBeDefined();
  });
  it('findUser returns a user if user with given password', async () => {
    const user = await controller.getbypass('a');
    expect(user).toBeDefined();
  });
  it('userSignin updates session object and returns user', async () => {
    const session = { userId: 1 };
    const user = await controller.signuser(
      { id: 1, email: 'ab@ab.com', password: 'aa' },
      session,
    );
    expect(user.id).toEqual(1);
    expect(session.userId).toEqual(1);
  });
});
