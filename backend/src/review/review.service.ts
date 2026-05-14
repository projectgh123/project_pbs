import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {

  constructor(private reviewService: ReviewService) {}

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Post()
  create(@Body() body: CreateReviewDto) {
    return this.reviewService.create(body);
  }
}