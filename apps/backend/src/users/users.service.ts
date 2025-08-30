import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(email: string) {
        if (!email || email.trim() === '') {
            throw new BadRequestException('Email is required')
        }

        const user = await this.prisma.user.findUnique({
            where: {
                email: email.trim(),
            },
        })

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user
    }

    async create(registerDto: {
        name: string
        email: string
        password: string
    }) {
        const user = await this.prisma.user.create({
            data: registerDto,
        })

        return user
    }
}
