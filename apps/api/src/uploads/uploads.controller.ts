import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadsService } from './uploads.service';
import { Request } from 'express';

interface MulterFile {
  filename: string;
  originalname: string;
  size: number;
}

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req: Request, file: MulterFile, cb) => {
          cb(null, './uploads');
        },
        filename: (req: Request, file: MulterFile, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: MulterFile) {
    return {
      url: this.uploadsService.getFileUrl(file.filename),
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
    };
  }
}
