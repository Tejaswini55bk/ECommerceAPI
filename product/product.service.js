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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./product.entity");
const sequelize_1 = require("@nestjs/sequelize");
const common_2 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor(prod) {
        this.prod = prod;
    }
    create(createprod) {
        return this.prod.create(createprod);
    }
    findAll() {
        return this.prod.findAll();
        return `This action returns all product`;
    }
    async findOne(id) {
        if (!id) {
            return null;
        }
        const product = await this.prod.findOne({ where: { id } });
        if (!product) {
            throw new common_2.NotFoundException('product not found');
        }
        return this.prod.findOne({ where: { id } });
    }
    async update(updateProductDto) {
        const product = await this.findOne(updateProductDto.id);
        if (!product) {
            return 'no such product with this id exists';
        }
        const res = this.prod.update(updateProductDto, {
            where: { id: updateProductDto.id },
        });
        return res;
    }
    async remove(id) {
        const product = await this.prod.findOne({ where: { id } });
        if (!product) {
            return 'no such product with this id exists';
        }
        return this.prod.destroy({ where: { id } });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_entity_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=product.service.js.map