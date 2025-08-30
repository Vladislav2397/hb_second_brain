import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
    Request,
} from '@nestjs/common'
import { NotesService } from './notes.service'
import { CreateNoteDto } from './dto/create-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'

function getUserIdFromRequest(req: Request): string {
    if (!('user' in req)) return ''
    if (typeof req.user !== 'object') return ''
    if (!('sub' in req.user)) return ''

    const userId = req.user.sub

    if (typeof userId !== 'string') return ''

    return userId
}

@Controller('api/v1/notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    async create(
        @Body() createNoteDto: CreateNoteDto,
        @Request() req: Request,
    ) {
        // @ts-expect-error TODO:
        console.log({ user: req.user })
        const note = await this.notesService.create(
            createNoteDto,
            getUserIdFromRequest(req),
        )

        return { note }
    }

    @Get()
    async findAll(@Request() req: Request) {
        const userId = getUserIdFromRequest(req)

        const notes = await this.notesService.findAll(userId)

        return { notes }
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Request() req: Request) {
        const userId = getUserIdFromRequest(req)

        const note = await this.notesService.findOne(id, userId)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateNoteDto: UpdateNoteDto,
        @Request() req: Request,
    ) {
        const userId = getUserIdFromRequest(req)

        const note = await this.notesService.update(id, updateNoteDto, userId)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Request() req: Request) {
        const userId = getUserIdFromRequest(req)

        const note = await this.notesService.remove(id, userId)

        if (!note) {
            throw new NotFoundException('Note not found')
        }

        return { note }
    }
}
