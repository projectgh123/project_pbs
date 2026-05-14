import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WisataService {

  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.wisata.findMany();
  }

  findOne(id: number) {
    return this.prisma.wisata.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.wisata.create({
      data,
    });
  }

  update(id: number, data: any) {
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