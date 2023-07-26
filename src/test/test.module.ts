import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Test, TestSchema} from './schemas/test.schema';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema}])],
  controllers: [TestController],
  providers: [TestService, WebsocketGateway]
})
export class TestModule {}