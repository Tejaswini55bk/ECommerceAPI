import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';
import cookieSession from 'cookie-session';
const CookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    CookieSession({
      keys: ['afccsf'],
    }),
  );
  const sequelize = app.get(Sequelize);
  await sequelize.sync({ alter: true });
  await app.listen(3000);
}
bootstrap();
