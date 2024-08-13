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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("./category.entity");
const sequelize_1 = require("@nestjs/sequelize");
const common_2 = require("@nestjs/common");
let CategoryService = class CategoryService {
    constructor(repos) {
        this.repos = repos;
    }
    create(createCategoryDto) {
        return this.repos.create(createCategoryDto);
    }
    findAll() {
        return this.repos.findAll();
        return `This action returns all category`;
    }
    async findOne(id) {
        const category = await this.repos.findOne({ where: { id } });
        if (!category) {
            throw new common_2.NotFoundException('category not found');
        }
        return this.repos.findOne({ where: { id } });
    }
    async update(updateCategoryDto) {
        const cat = await this.findOne(updateCategoryDto.id);
        if (!cat) {
            return 'no such product with this id exists';
        }
        return this.repos.update(updateCategoryDto, {
            where: { id: updateCategoryDto.id },
        });
    }
    async remove(id) {
        const cat = await this.repos.findOne({ where: { id } });
        if (!cat) {
            return 'no such product with this id exists';
        }
        return this.repos.destroy({ where: { id } });
        return `This action removes a #${id} category`;
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(category_entity_1.Category)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map