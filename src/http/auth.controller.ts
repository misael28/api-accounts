import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('auth') // <-- /auth
export class AuthController {
  constructor(private prisma: PrismaService) {}
  @Get()
  auth() {
    return this.prisma.user.findMany();
  }
}
