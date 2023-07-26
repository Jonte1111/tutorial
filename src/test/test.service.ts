import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './schemas/test.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private readonly userModel: Model<Test>) {}
  async create(createUserDto: CreateUserDto): Promise<Test> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }
  async findAll(): Promise<Test[]> {
    return this.userModel.find().exec();
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
