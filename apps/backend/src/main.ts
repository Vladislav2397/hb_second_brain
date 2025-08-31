import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = 5210

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })
    await app.listen(PORT, '0.0.0.0')
}
void bootstrap()
