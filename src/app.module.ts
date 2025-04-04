import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './notes/note.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      host: 'db',
      port: 5432,
      username: 'pweb',
      password: 'pweb',
      database: 'nest_test',
      entities: [Note, User],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Note]),
    NotesModule,
    UsersModule,
    BotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
