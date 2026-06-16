import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWisataDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @IsString()
  @IsNotEmpty()
  lokasi: string;

  @IsInt()
  harga: number;

  @IsOptional()
  @IsString()
  gambar?: string;

  @IsOptional()
  @IsInt()
  categoryId?: number;
}