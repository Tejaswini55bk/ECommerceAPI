import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product.controller';
import { ProductService } from '../product.service';
import { prodFixture } from './fixture/productfixture.fixture';

describe('UserController', () => {
  let controller: ProductController;
  let fakeproservice: Partial<ProductService>;

  beforeEach(async () => {
    fakeproservice = {
      findOne: (id: number) => {
        return Promise.resolve(prodFixture);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: fakeproservice,
        },
      ],
    }).compile();
    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('returns a product', async () => {
    const user = await controller.findOne('1');
    expect(user).toBeDefined();
  });
});
