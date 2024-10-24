import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const isDevelopment = process.env.NODE_ENV === 'development';
const nextApp = Next({ dev: isDevelopment });
@Module({
  imports: [
    RenderModule.forRootAsync(nextApp, {
      viewsDir: null,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
