import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './schemas/test.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class TestService {
    constructor(@InjectModel(Test.name) private readonly catModel: Model<Test>) {}

  async create(createCatDto: CreateCatDto): Promise<Test> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<Test[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Test> {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
