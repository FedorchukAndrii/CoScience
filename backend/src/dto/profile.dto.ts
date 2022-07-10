import { Interest, Role } from '@prisma/client';
import { IsArray, IsEmail, IsLocale, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProfileDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsArray()
  @IsOptional()  
  interests?: Interest[];

  @IsArray()
  @IsOptional()
  roles?: Role[];
  
  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  city?: string;
}
