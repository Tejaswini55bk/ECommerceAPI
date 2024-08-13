import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from '../category.controller';
import { CategoryService } from '../category.service';
import { catFixture } from './fixture/categoryfixture.fixture';

describe('UserController', () => {
  let controller: CategoryController;
  let fakecatservice: Partial<CategoryService>;

  beforeEach(async () => {
    fakecatservice = {
      findOne: (id: number) => {
        return Promise.resolve(catFixture);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: fakecatservice,
        },
      ],
    }).compile();
    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('returns a category', async () => {
    const user = await controller.findOne('1');
    expect(user).toBeDefined();
  });


});
