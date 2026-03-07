import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Role, User } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
