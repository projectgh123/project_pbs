import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { WisataModule } from './wisata/wisata.module';
import { KategoriModule } from './kategori/kategori.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    WisataModule,
    KategoriModule,
    UserModule,
  ],
})
export class AppModule {}