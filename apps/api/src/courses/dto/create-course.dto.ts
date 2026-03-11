import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  thumbnailUrl?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}
