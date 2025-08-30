import { Injectable } from '@nestjs/common'
import { CreateNoteDto } from './dto/create-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'
import { Note } from './entities/note.entity'

@Injectable()
export class NotesService {
    private notes = [
        {
            id: 1,
            title: 'Note 1',
            content: 'Content 1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            title: 'Note 2',
            content: 'Content 2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ] satisfies Note[]

    create(createNoteDto: CreateNoteDto) {
        return {
            ...createNoteDto,
            id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        } satisfies Note
    }

    findAll() {
        return this.notes
    }

    findOne(id: number) {
        return this.notes.find((note) => note.id === id)
    }

    update(id: number, updateNoteDto: UpdateNoteDto) {
        const found = this.notes.find((note) => note.id === id)

        if (!found) {
            return null
        }

        return {
            ...found,
            ...updateNoteDto,
        }
    }

    remove(id: number) {
        return this.notes.find((note) => note.id === id)
    }
}
