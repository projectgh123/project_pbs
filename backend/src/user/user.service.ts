import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  findAll() {
    return {
      message: 'Semua user',
    };
  }
}