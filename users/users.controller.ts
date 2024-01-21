// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  @Post('/addmultiple')
  createMultiple(@Body() usersData: Partial<User>[]): Promise<User[]> {
    return this.usersService.createMultiple(usersData);
  }
}
