import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adm-jonte:<passwrd>@atlascluster.qnebpqi.mongodb.net/'), TestModule],
})
export class AppModule {}
