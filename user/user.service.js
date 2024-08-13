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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const sequelize_1 = require("@nestjs/sequelize");
let UserService = class UserService {
    constructor(repos) {
        this.repos = repos;
    }
    create(create) {
        const res = this.repos.create(create);
        return res;
    }
    async findOne(id) {
        return await this.repos.findOne({ where: { id } });
    }
    async findOneByEmail(email) {
        return await this.repos.findOne({ where: { email } });
    }
    async findOneByPassword(password) {
        return await this.repos.findOne({ where: { password } });
    }
    findAll() {
        return this.repos.findAll();
    }
    async update(attrs) {
        const use = await this.findOneByEmail(attrs.email);
        if (!use) {
            throw new common_1.BadRequestException('No such id present');
        }
        return await this.repos.update(attrs, { where: { email: attrs.email } });
    }
    async remove(email) {
        const use = await this.repos.findOne({ where: { email } });
        if (!use) {
            throw new common_1.BadRequestException('No such id present');
        }
        return this.repos.destroy({ where: { email } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map