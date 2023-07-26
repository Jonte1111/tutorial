import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import helmet from 'helmet';
import { ValidationPipe} from '@nestjs/common'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');

  app.useGlobalPipes(new ValidationPipe);
 app.use(helmet());
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST',
    credentials: true,

  });
  await app.listen(3000);
}
bootstrap();
