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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const createuser_dto_1 = require("./dtos/createuser.dto");
const user_service_1 = require("./user.service");
const common_2 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const currentuser_interceptor_1 = require("./currentuser.interceptor");
const common_3 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const common_4 = require("@nestjs/common");
const signinDto_1 = require("./dtos/signinDto");
let UserController = class UserController {
    constructor(repo, auth) {
        this.repo = repo;
        this.auth = auth;
    }
    async createUser(body) {
        try {
            console.log('creating');
            const users = await this.repo.findOneByEmail(body.email);
            if (users) {
                throw new common_3.BadRequestException();
            }
            return this.repo.create(body);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user signup error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    async signuser(body, session) {
        try {
            const signed = await this.auth.signIn(body);
            session.userId = signed.id;
            return signed;
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user signin error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    signOut(session) {
        try {
            session.userId = null;
            return 'successfully signed out the recent signed in user.';
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user signout error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    who(session) {
        try {
            return this.repo.findOne(session.userId);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user authentication error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    getbymail(email) {
        try {
            return this.repo.findOneByEmail(email);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user get by mail error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    getbypass(password) {
        try {
            return this.repo.findOneByPassword(password);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user get by password error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    updateuser(body) {
        try {
            console.log('updatingg..');
            return this.repo.update(body);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user update error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    delete(body) {
        try {
            return this.repo.remove(body.email);
        }
        catch (error) {
            throw new common_4.HttpException({
                status: common_4.HttpStatus.FORBIDDEN,
                error: 'This is a user deletion error message',
            }, common_4.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createuser_dto_1.userDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signinDto_1.signinDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signuser", null);
__decorate([
    (0, common_1.Post)('/signout'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signOut", null);
__decorate([
    (0, common_1.Get)('/who'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "who", null);
__decorate([
    (0, common_1.Get)('byemail'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_2.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getbymail", null);
__decorate([
    (0, common_1.Get)('bypassword'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    __param(0, (0, common_2.Query)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getbypass", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateuser", null);
__decorate([
    (0, common_1.Post)('del'),
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signinDto_1.signinDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseInterceptors)(currentuser_interceptor_1.CurrentuserInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.authservice])
], UserController);
//# sourceMappingURL=user.controller.js.map