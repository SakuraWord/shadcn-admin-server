import { PartialType } from '@nestjs/mapped-types';
import { isNotEmpty, isString, Length } from 'class-validator'
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
