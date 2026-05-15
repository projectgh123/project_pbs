import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { WisataModule } from './wisata/wisata.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    WisataModule,
    ReviewModule,
    UserModule,
    UploadModule,
    PrismaModule,
  ],
})
export class AppModule {}