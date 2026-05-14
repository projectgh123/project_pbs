import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReviewDto {

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  komentar: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}