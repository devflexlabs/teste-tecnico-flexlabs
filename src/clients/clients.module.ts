import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsRepository } from './clients.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository],
})
export class ClientsModule {}
