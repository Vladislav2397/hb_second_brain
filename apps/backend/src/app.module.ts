import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NotesModule } from './notes/notes.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { getEnv } from './lib/getEnv'

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: [
                `.env.${getEnv('NODE_ENV')}.local`,
                `.env.${getEnv('NODE_ENV')}`,
            ],
            isGlobal: true,
        }),
        NotesModule,
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
