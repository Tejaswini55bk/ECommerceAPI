import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from '../review.service';
import { reviewFixture } from './fixtures/reviewfixture.fixture';

describe('ReviewService', () => {
  let service: ReviewsService;
  let mockservice: Partial<ReviewsService>;
  beforeEach(async () => {
    mockservice = {
      findOne: (id: number) => {
        return Promise.resolve(reviewFixture);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ReviewsService,
          useValue: mockservice,
        },
      ],
    }).compile();

    service = module.get<ReviewsService>(ReviewsService);
  });

  it('Review is found', async () => {
    const use = await service.findOne(1);
    expect(use).toBeDefined();
  });

  // it('Review is not found', async () => {
  //   // mockservice.findOne = () => null;
  //   await expect(service.findOne(10)).rejects.toThrow(NotFoundException);
  // });
});
