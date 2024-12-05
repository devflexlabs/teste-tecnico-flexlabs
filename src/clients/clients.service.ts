import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { Client } from './entities/client.entity';
import { ClientNotFound } from './error/client-not-found.error';

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

  async findAll() {
    const clients = await this.clientsRepository.loadAll();
    return clients;
  }

  async findOne(id: string) {
    const client = await this.clientsRepository.loadById(id);
    if (!client) {
      throw new ClientNotFound(id)
    }
    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: string) {
    const client = await this.clientsRepository.loadById(id);
    if (!client) {
      throw new ClientNotFound(id)
    }
    await this.clientsRepository.delete(id);
    return client;
  }
}
