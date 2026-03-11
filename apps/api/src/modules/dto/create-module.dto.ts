import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsOptional()
  order?: number;

  @IsUUID()
  @IsNotEmpty()
  courseId: string;
}
