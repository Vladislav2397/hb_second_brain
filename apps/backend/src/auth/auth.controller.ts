import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Patch,
    Post,
    Request,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { Public } from 'src/lib/decorators'
import { UsersService } from 'src/users/users.service'

function getUserIdFromRequest(req: Request): string {
    if (!('user' in req)) return ''
    if (typeof req.user !== 'object') return ''
    if (!('sub' in req.user)) return ''

    const userId = req.user.sub

    if (typeof userId !== 'string') return ''

    return userId
}

@Controller('api/v1/auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
    ) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: { email: string; password: string }) {
        return this.authService.signIn(signInDto.email, signInDto.password)
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('register')
    signUp(
        @Body() registerDto: { name: string; email: string; password: string },
    ) {
        return this.authService.signUp(registerDto)
    }

    @Get('me')
    async getMe(@Request() req) {
        const userId = getUserIdFromRequest(req)
        const user = await this.usersService.findById(userId)

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }

    @Patch('me')
    updateMe(@Request() req, @Body() updateMeDto: { name: string }) {
        return this.usersService.update(req.user.sub, {
            name: updateMeDto.name,
        })
    }
}
