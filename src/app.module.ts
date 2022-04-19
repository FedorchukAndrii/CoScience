import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://andriif:darkgod12A@cluster0.nudwo.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
