import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto, instructorId: string) {
    return this.prisma.course.create({
      data: {
        ...createCourseDto,
        instructorId,
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        category: true,
        instructor: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        category: true,
        instructor: { select: { id: true, name: true, email: true } },
        modules: { include: { lessons: true }, orderBy: { order: 'asc' } },
      },
    });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    await this.findOne(id); // Ensure course exists
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure course exists
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
