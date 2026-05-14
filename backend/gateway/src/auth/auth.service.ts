import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  private authUrl = 'http://localhost:3001/auth';

  async login(data: any) {
    const response = await axios.post(`${this.authUrl}/login`, data);
    return response.data;
  }

  async register(data: any) {
    const response = await axios.post(`${this.authUrl}/register`, data);
    return response.data;
  }
}