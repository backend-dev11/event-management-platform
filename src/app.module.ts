import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { Event } from './event/entities/event.entity';

import * as dotenv from 'dotenv';

dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      entities: [Event],
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true,
    }),
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

