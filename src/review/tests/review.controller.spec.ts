import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsController } from '../review.controller';
import { ReviewsService } from '../review.service';
import { reviewFixture } from './fixtures/reviewfixture.fixture';

describe('UserController', () => {
  let controller: ReviewsController;
  let fakerevservice: Partial<ReviewsService>;

  beforeEach(async () => {
    fakerevservice = {
      findOne: (id: number) => {
        return Promise.resolve(reviewFixture);
      },
      
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewsController],
      providers: [
        {
          provide: ReviewsService,
          useValue: fakerevservice,
        },
      ],
    }).compile();
    controller = module.get<ReviewsController>(ReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findOnerev returns a review', async () => {
    const user = await controller.findOnerev('1');
    expect(user).toBeDefined();
  });
});
