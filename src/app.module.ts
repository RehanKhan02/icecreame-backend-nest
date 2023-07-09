import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { icecreameModule } from './icecreame/icecreame.module';

@Module({
  imports: [icecreameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
