import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = 5210

async function bootstrap() {
    console.log('mode is =', process.env.NODE_ENV)

    const app = await NestFactory.create(AppModule, { cors: true })
    await app.listen(PORT, '0.0.0.0')
}
void bootstrap()
