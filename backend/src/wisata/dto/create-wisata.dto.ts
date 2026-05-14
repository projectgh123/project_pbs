import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWisataDto {

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  deskripsi: string;

  @IsString()
  lokasi: string;

  @IsNumber()
  harga: number;

  @IsString()
  gambar: string;
}