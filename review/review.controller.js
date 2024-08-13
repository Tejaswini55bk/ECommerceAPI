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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const createreview_dto_1 = require("./dtos/createreview.dto");
const updatereview_dto_1 = require("./dtos/updatereview.dto");
const common_2 = require("@nestjs/common");
let ReviewsController = class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    create(createReviewDto) {
        try {
            return this.reviewsService.create(createReviewDto);
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a review cretion error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    findAllreview() {
        try {
            return this.reviewsService.findAll();
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a findall review error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    findOnerev(id) {
        try {
            return this.reviewsService.findOne(parseInt(id));
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a findone review error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    update(body) {
        try {
            return this.reviewsService.update(body);
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a review updatation error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    remove(id) {
        try {
            return this.reviewsService.remove(parseInt(id));
        }
        catch (error) {
            throw new common_2.HttpException({
                status: common_2.HttpStatus.FORBIDDEN,
                error: 'This is a review removal error message',
            }, common_2.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createreview_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAllreview", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findOnerev", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatereview_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "remove", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [review_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=review.controller.js.map