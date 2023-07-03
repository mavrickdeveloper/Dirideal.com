import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiridealController } from './dirideal/dirideal.controller';

@Module({
  imports: [],
  controllers: [AppController, DiridealController],
  providers: [AppService],
})
export class AppModule {}
