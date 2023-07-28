import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Test, TestSchema} from './schemas/test.schema';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema}]), HttpModule],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}