
// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  async createMultiple(usersData: Partial<User>[]): Promise<User[]> {
    const users = this.usersRepository.create(usersData);
    return this.usersRepository.save(users);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
