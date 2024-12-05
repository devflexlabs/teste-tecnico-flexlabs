import { DatabaseService } from "src/database/database.service";
import { Client } from "./entities/client.entity";
import { PrismaClientsMapper } from "./mapper/clients.mapper";
import { UpdateClientDto } from "./dto/update-client.dto";

export class ClientsRepository {
  constructor(private db: DatabaseService) {}

  async create(client: Client): Promise<Client> {
    await this.db.client.create({
      data: PrismaClientsMapper.toPrisma(client)
    })
    return client;
  }

  async findAll(): Promise<Client[]> {
    const prismaClients = await this.db.client.findMany()
    return prismaClients.map(PrismaClientsMapper.toDomain)
  }

  async findOne(id: string): Promise<Client> {
    const prismaClient = await this.db.client.findFirst({
      where: { id },
    })
    return PrismaClientsMapper.toDomain(prismaClient);
  }

  async update(id: string, data: UpdateClientDto): Promise<Client> {
    const prismaClient = await this.db.client.update({
      where: { id },
      data,
    })
    return PrismaClientsMapper.toDomain(prismaClient);
  }

  async remove(id: string): Promise<Client> {
    const prismaClient = await this.db.client.delete({
      where: { id },
    })
    return PrismaClientsMapper.toDomain(prismaClient);
  }
}