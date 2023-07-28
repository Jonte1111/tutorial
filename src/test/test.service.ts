import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './schemas/test.schema';
import { CreateUserDto } from './dto/create-user.dto';
import axios from 'axios';
import { HttpService } from '@nestjs/axios/dist/http.service';
import { firstValueFrom, catchError, throwError} from 'rxjs';
import { AxiosError} from 'axios'
import { Logger } from '@nestjs/common/services';
@Injectable()
export class TestService {
  private readonly logger = new Logger(TestService.name);
  constructor(@InjectModel(Test.name) private readonly userModel: Model<Test>, private readonly httpService: HttpService) {}
  async create(createUserDto: CreateUserDto): Promise<Test> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }
  async findAll() {
    try {
      const response = await this.userModel.find();
      return response;
    } catch (error) {
      throw new Error('Epic fail');
    }
  } 

  async findOne(id: string): Promise<Test> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
