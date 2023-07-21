import { Controller, Get, Post, Param, Body, Delete, } from "@nestjs/common";
import { Test } from './schemas/test.schema'
import { TestService } from './test.service'
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller("test")
export class TestController{
    constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.testService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Test> {
    return this.testService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.testService.delete(id);
  }
    
}