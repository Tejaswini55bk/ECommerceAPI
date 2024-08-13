import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { userFixture } from './fixtures/userfixture.fixture';

describe('UserService', () => {
  let service: UserService;
  let mockservice: Partial<UserService>;

  beforeEach(async () => {
    mockservice = {
      findOne: (id: number) => {
        return Promise.resolve(userFixture);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: mockservice,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('user is found', async () => {
    const use = await service.findOne(1);
    expect(use).toBeDefined();
    expect(use.id).toEqual(1);
  });
});
