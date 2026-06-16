import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Injectable()
export class WisataService {

  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.wisata.findMany({
      include: {
        category: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.wisata.findUnique({
      where: { 
        id,
       },
       include: {
        category: true,
        review: true,
       },
    });
  }

  create(data: CreateWisataDto) {
    return this.prisma.wisata.create({
      data,
    });
  }

  update(id: number, data: UpdateWisataDto) {
    return this.prisma.wisata.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.wisata.delete({
      where: { id },
    });
  }
}