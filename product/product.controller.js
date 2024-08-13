"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const createproduct_dto_1 = require("./dtos/createproduct.dto");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createproduct(body) {
        try {
            return this.productService.create(body);
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a product creation error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    findAllproduct() {
        try {
            return this.productService.findAll();
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a find all products error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    async findOne(id) {
        try {
            if (!id) {
                return null;
            }
            const product = await this.productService.findOne(parseInt(id));
            if (!product) {
                throw new common_3.NotFoundException('product not found');
            }
            return product;
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a product findone error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    update(updateProductDto) {
        try {
            return this.productService.update(updateProductDto);
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a product updation error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    remove(id) {
        try {
            return this.productService.remove(parseInt(id));
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a product removal error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createproduct_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createproduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAllproduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map