import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adm-jonte:4tuQJqFAqVCDRf@atlascluster.qnebpqi.mongodb.net/'), TestModule],
})
export class AppModule {}
