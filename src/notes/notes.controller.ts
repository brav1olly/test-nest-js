import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }

    @Post()
    async create(@Body() body: { title: string; description: string }): Promise<Note> {
        return this.notesService.create(body.title, body.description);
    }
}
