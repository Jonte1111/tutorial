import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/TestDB'), TestModule],
})
export class AppModule {}
