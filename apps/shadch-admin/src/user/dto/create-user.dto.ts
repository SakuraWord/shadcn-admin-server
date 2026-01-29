import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空！' })
  @IsString()
  username: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 18, { message: '密码长度必须在6到18之间' })
  password: string
}