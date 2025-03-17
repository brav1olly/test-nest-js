import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post('register')
    async register(@Body() body: { email: string; password: string }) {
        const { email, password } = body;
        return this.usersService.createUser(email, password);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
  }
