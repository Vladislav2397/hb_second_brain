import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
} from '@nestjs/common'
import { NotesService } from './notes.service'
import { CreateNoteDto } from './dto/create-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'

@Controller('api/v1/notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    create(@Body() createNoteDto: CreateNoteDto) {
        const note = this.notesService.create(createNoteDto)

        return { note }
    }

    @Get()
    findAll() {
        const notes = this.notesService.findAll()

        return { notes }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const note = this.notesService.findOne(+id)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
        const note = this.notesService.update(+id, updateNoteDto)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        const note = this.notesService.remove(+id)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }
}
