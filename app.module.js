"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const product_module_1 = require("./product/product.module");
const review_module_1 = require("./review/review.module");
const sequelize_1 = require("@nestjs/sequelize");
const review_entity_1 = require("./review/review.entity");
const product_entity_1 = require("./product/product.entity");
const user_entity_1 = require("./user/user.entity");
const config_1 = require("@nestjs/config");
const category_module_1 = require("./category/category.module");
const category_entity_1 = require("./category/category.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                username: process.env.DB_USERNAME,
                port: parseInt(process.env.DB_PORT),
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                host: process.env.DB_HOST,
                models: [category_entity_1.Category, product_entity_1.Product, user_entity_1.User, review_entity_1.Review],
                synchronize: true,
            }),
            user_module_1.UsersModule,
            product_module_1.ProductModule,
            review_module_1.ReviewsModule,
            category_module_1.CategoryModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map