import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async create(createModuleDto: CreateModuleDto) {
    return this.prisma.module.create({
      data: createModuleDto,
    });
  }

  async findAll() {
    return this.prisma.module.findMany({
      include: {
        course: { select: { id: true, title: true } },
      },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    const module = await this.prisma.module.findUnique({
      where: { id },
      include: {
        course: { select: { id: true, title: true } },
        lessons: { orderBy: { order: 'asc' } },
      },
    });
    if (!module) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }
    return module;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    await this.findOne(id); // Ensure module exists
    return this.prisma.module.update({
      where: { id },
      data: updateModuleDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure module exists
    return this.prisma.module.delete({
      where: { id },
    });
  }
}
