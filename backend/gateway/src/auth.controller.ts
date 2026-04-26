import { Controller, Post, Body } from '@nestjs/common';
import { AuthClient } from './auth.client';

@Controller('auth')
export class AuthController {

  @Post('login')
  login(@Body() data: any) {
    return AuthClient.send('login', data);
  }

  @Post('register')
  register(@Body() data: any) {
    return AuthClient.send('register', data);
  }
}