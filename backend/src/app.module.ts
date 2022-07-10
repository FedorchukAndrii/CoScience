import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdministrationService } from './admin/administration/administration.service';
import { AdministrationController } from './admin/administration/administration.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    PrismaModule,
    ProfileModule,
  ],
  providers: [AdministrationService],
  controllers: [AdministrationController],
})
export class AppModule {}
