import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Injectable()
export class UploadsService {
  private readonly uploadPath: string;

  constructor(private configService: ConfigService) {
    this.uploadPath =
      this.configService.get<string>('UPLOAD_PATH') ||
      join(process.cwd(), 'uploads');
    this.ensureUploadPathExists();
  }

  private ensureUploadPathExists() {
    if (!existsSync(this.uploadPath)) {
      mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  getUploadPath(): string {
    return this.uploadPath;
  }

  getFileUrl(filename: string): string {
    const baseUrl =
      this.configService.get<string>('APP_URL') || 'http://localhost:3001';
    return `${baseUrl}/uploads/${filename}`;
  }
}
