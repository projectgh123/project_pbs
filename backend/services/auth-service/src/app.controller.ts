import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern('register')
  register(data: any) {
    return {
      message: 'Register berhasil',
      data,
    };
  }

  @MessagePattern('login')
  login(data: any) {
    return {
      message: 'Login berhasil',
      data,
    };
  }
}