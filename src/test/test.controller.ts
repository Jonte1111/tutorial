import { Controller, Get, Post, Param, Body, Delete, Req, Res, OnModuleInit} from "@nestjs/common";
import { Test } from './schemas/test.schema'
import { TestService } from './test.service'
import { CreateUserDto } from "./dto/create-user.dto";
import {Request, Response} from 'express';
import { HttpService } from "@nestjs/axios/dist";
import { Observable } from "rxjs";
import {AxiosResponse } from 'axios';
@Controller()
export class TestController {
    constructor(private readonly testService: TestService, private readonly httpService: HttpService) {}
    private clients: Response[] = [];
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      await this.testService.create(createUserDto);
      this.clients.forEach((client) => {
        client.write(`data: ${JSON.stringify(createUserDto)}\n\n`)
      })
    }
  
    @Get('users')
    async findAll(){
      const users =  this.testService.findAll();
      this.clients.forEach((client) => {
        client.write(`data: ${JSON.stringify(users)}\n\n`);
      })
      return users;
    }
    @Get('users/stream')
    async streamUsers(@Res() res: Response) {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      });
      this.clients.push(res);
      res.on('close', () => {
        this.clients = this.clients.filter((client) => client !== res);
      });
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
  