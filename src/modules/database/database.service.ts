import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../common/config/config.service';

@Injectable()
export class DatabaseService {
  private dbConfig;

  constructor(private configService: ConfigService) {
    this.dbConfig = this.configService.getDatabaseConfig();
  }

  getDbConfig() {
    return this.dbConfig;
  }
}
