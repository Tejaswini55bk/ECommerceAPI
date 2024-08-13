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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const class_transformer_1 = require("class-transformer");
const sequelize_typescript_2 = require("sequelize-typescript");
const review_entity_1 = require("../review/review.entity");
const class_validator_1 = require("class-validator");
const uservalue_enum_1 = require("./enums/uservalue.enum");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    sequelize_typescript_2.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    (0, class_transformer_1.Exclude)({}),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    (0, class_validator_1.IsEnum)(uservalue_enum_1.uservalue),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => review_entity_1.Review),
    __metadata("design:type", review_entity_1.Review)
], User.prototype, "reviews", void 0);
exports.User = User = __decorate([
    sequelize_typescript_1.Table
], User);
//# sourceMappingURL=user.entity.js.map