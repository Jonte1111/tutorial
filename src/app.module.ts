import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';
import { TestService } from './test/test.service';
import { TestController } from './test/test.controller';
//test
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adm-jonte:<pass>@atlascluster.qnebpqi.mongodb.net/'), TestModule
],
})
export class AppModule {}
