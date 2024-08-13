"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const sequelize_typescript_1 = require("sequelize-typescript");
const CookieSession = require('cookie-session');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(CookieSession({
        keys: ['afccsf'],
    }));
    const sequelize = app.get(sequelize_typescript_1.Sequelize);
    await sequelize.sync({ alter: true });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map