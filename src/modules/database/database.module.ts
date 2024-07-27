import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../common/config/config.module';
import { DatabaseService } from './database.service';

@Module({
  imports: [AppConfigModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
