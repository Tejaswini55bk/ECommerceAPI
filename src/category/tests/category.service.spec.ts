import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from '../category.service';
import { catFixture } from './fixture/categoryfixture.fixture';
describe('CategoryService', () => {
  let service: CategoryService;
  let mockservice: Partial<CategoryService>;

  beforeEach(async () => {
    mockservice = {
      findOne: (id: number) => {
        return Promise.resolve(catFixture);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CategoryService,
          useValue: mockservice,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Category is found', async () => {
    const use = await service.findOne(1);
    expect(use).toBeDefined();
  });
});
