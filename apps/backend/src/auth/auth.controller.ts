import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { Public } from 'src/lib/decorators'

@Controller('api/v1/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

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

    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
