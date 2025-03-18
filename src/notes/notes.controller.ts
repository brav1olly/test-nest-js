import { Controller, Get, Post, Body, ParseIntPipe, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }

    @Get(':id')
    async getNoteById(@Param('id', ParseIntPipe) id: number) {
        return this.notesService.findOne(id)
    }

    @Post()
    async create(@Body() body: { title: string; description: string }): Promise<Note> {
        return this.notesService.create(body.title, body.description);
    }
}
