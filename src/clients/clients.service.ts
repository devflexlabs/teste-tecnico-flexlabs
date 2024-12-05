import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}
  async create(request: CreateClientDto) {
    const {birth_date, email, full_name, phone, subscribed} = request;
    const client = new Client({
      full_name,
      email,
      phone,
      birth_date,
      subscribed,
    })
    await this.clientsRepository.save(client)  
    return client;
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
