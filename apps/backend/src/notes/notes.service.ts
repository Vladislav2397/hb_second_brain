import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateNoteDto } from './dto/create-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class NotesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createNoteDto: CreateNoteDto, userId: string) {
        const note = await this.prisma.note.create({
            data: { ...createNoteDto, authorId: userId },
        })

        return note
    }

    findAll(userId: string) {
        return this.prisma.note.findMany({
            where: { authorId: userId },
        })
    }

    findOne(id: string, userId: string) {
        return this.prisma.note.findUnique({
            where: { id, authorId: userId },
        })
    }

    async update(id: string, updateNoteDto: UpdateNoteDto, userId: string) {
        const found = await this.prisma.note.update({
            where: { id, authorId: userId },
            data: updateNoteDto,
        })

        if (!found) {
            throw new NotFoundException('Note not found')
        }

        return {
            ...found,
            ...updateNoteDto,
        }
    }

    async remove(id: string, userId: string) {
        const found = await this.prisma.note.delete({
            where: { id, authorId: userId },
        })

        if (!found) {
            throw new NotFoundException('Note not found')
        }

        return found
    }
}
