import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { WisataService } from './wisata.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Controller('wisata')
export class WisataController {
  constructor(private readonly wisataService: WisataService) {}

  @Get()
  findAll() {
    return this.wisataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.wisataService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateWisataDto) {
    return this.wisataService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateWisataDto,
  ) {
    return this.wisataService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.wisataService.remove(id);
  }
}