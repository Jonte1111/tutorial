import { Controller, Get, Post, Param, Body, Delete, Req, Res, OnModuleInit} from "@nestjs/common";
import { Test } from './schemas/test.schema'
import { TestService } from './test.service'
import { CreateUserDto } from "./dto/create-user.dto";
import {Request, Response} from 'express';
import { WebsocketGateway } from "./websocket.gateway";
@Controller()
export class TestController {
    constructor(private readonly testService: TestService, private readonly websocketGateway: WebsocketGateway) {}
    private clients: Response[] = [];
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      await this.testService.create(createUserDto);
    }
  
    @Get()
    async findAll(): Promise<Test[]> {
      const users = await this.testService.findAll();
      this.websocketGateway.server.emit('users', users)
      //return this.testService.findAll();
      return users;
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
  