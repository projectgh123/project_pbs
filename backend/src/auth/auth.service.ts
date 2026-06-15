import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  async login(body: LoginDto) {
    return {
      message: 'Login berhasil',
      user: body.username,
    };
  }
}