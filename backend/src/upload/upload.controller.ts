import { Controller, Post } from '@nestjs/common';

@Controller('upload')
export class UploadController {

  @Post()
  uploadFile() {
    return {
      message: 'Upload berhasil',
    };
  }
}