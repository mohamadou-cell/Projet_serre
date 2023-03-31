import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClimatModule } from './climat/climat.module';
import { ParametreModule } from './parametre/parametre.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    ClimatModule,
    ParametreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}