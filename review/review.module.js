"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const review_controller_1 = require("./review.controller");
const sequelize_1 = require("@nestjs/sequelize");
const review_entity_1 = require("./review.entity");
const product_module_1 = require("../product/product.module");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/user.entity");
let ReviewsModule = class ReviewsModule {
};
exports.ReviewsModule = ReviewsModule;
exports.ReviewsModule = ReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([review_entity_1.Review, user_entity_1.User]),
            product_module_1.ProductModule,
            user_module_1.UsersModule,
        ],
        controllers: [review_controller_1.ReviewsController],
        providers: [review_service_1.ReviewsService, user_service_1.UserService],
    })
], ReviewsModule);
//# sourceMappingURL=review.module.js.map