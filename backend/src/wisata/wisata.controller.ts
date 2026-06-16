import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { WisataService } from './wisata.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Controller('wisata')
export class WisataController {

  constructor(private wisataService: WisataService) {}

  @Get()
  findAll() {
    return this.wisataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wisataService.findOne(Number(id));
  }

 @Post()
 create(@Body() body: CreateWisataDto) {
   return this.wisataService.create(body);
 }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateWisataDto,
  ) {
    return this.wisataService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wisataService.remove(Number(id));
  }
}