import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NotesModule } from './notes/notes.module'

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [NotesModule],
})
export class AppModule {}
