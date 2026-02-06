import { Injectable, Request, Response } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto, '=============================')
    // try {
    //   const user = await this.userRepository.save(createUserDto)
    //   return {
    //     code: 200,
    //     message: '注册成功',
    //     data: user
    //   }
    // } catch (error) {
    //   return {
    //     code: 500,
    //     message: error.message
    //   }
    // }
  }


  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
