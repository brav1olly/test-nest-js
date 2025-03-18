import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { BotModule } from 'src/bot/bot.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), BotModule],
  providers: [NotesService],
  controllers: [NotesController]
})
export class NotesModule {}
