import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private useRepoasitory:Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    return await this.useRepoasitory.save(createUserDto);
  }

  async findAll() {
    return await this.useRepoasitory.find();
  }

  async findOne(id: number) {
    return await `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} user`;
  }
}
