"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authguard = void 0;
class authguard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.session.userId;
    }
}
exports.authguard = authguard;
//# sourceMappingURL=auth.guard.js.map