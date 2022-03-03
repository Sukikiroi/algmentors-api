import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MentorsModule } from './mentors/mentors.module';
import { StudentsModule } from './students/students.module';
import { TutosModule } from './tutos/tutos.module';

import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'aziz',
    password: 'aziz',
    database: 'algmentors',
    autoLoadEntities: true,
    synchronize: true,
  }),MentorsModule, StudentsModule, TutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
