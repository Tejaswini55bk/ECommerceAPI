import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../product.service';
import { prodFixture } from './fixture/productfixture.fixture';

describe('ProductService', () => {
  let service: ProductService;
  let mockservice: Partial<ProductService>;

  beforeEach(async () => {
    mockservice = {
      findOne: (id: number) => {
        return Promise.resolve(prodFixture);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: mockservice,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Product is found', async () => {
    const use = await service.findOne(1);
    expect(use).toBeDefined();
    expect(use.id).toEqual(1);
  });

  // it('Product is not found', async () => {
  //   mockservice.findOne = () => null;
  //   await expect(service.findOne(10)).rejects.toThrow(NotFoundException);
  // });
});
