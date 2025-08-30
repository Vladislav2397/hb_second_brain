import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NotesModule } from './notes/notes.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [NotesModule, AuthModule, UsersModule],
})
export class AppModule {}
