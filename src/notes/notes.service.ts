import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { BotService } from 'src/bot/bot.service';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    private readonly botService: BotService
  ) {}

  async create(title: string, description: string): Promise<Note> {
    const note = this.notesRepository.create({ title, description });
    
    const message = `📌 Новая заметка:\n\n📝 *${title}*\n📖 ${description}`
    await this.botService.sendMessage(message)

    return this.notesRepository.save(note);
  }

  async findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    const note = await this.notesRepository.findOne({where: {id}})
    if (!note) {
      throw new NotFoundException('заметка не найдена')
    }
    return note
  }
}