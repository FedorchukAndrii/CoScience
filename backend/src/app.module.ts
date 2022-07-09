import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AdministrationService } from './admin/administration/administration.service';
import { AdministrationController } from './admin/administration/administration.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    PrismaModule,
    BookmarkModule,
  ],
  providers: [AdministrationService],
  controllers: [AdministrationController],
})
export class AppModule {}
