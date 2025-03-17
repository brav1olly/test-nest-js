import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async createUser(email: string, password: string): Promise<User> {
        console.log('Begin');
        const user = this.userRepository.create({ email, password })
        console.log('Good');
        return this.userRepository.save(user)
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
