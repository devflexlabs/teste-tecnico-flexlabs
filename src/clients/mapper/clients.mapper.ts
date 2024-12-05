import { Client } from "../entities/client.entity";
import { Client as PrismaClientModel } from "@prisma/client";

export class PrismaClientsMapper {
  static toPrisma (client: Client) {
    return {
      id: client.id,
      full_name: client.full_name,
      email: client.email,
      phone: client.phone,
      birth_date: client.birth_date,
      subscribed: client.subscribed,
      created_at: client.created_at
    };
  }

  static toDomain (raw: PrismaClientModel) {
    return new Client(
      {
        full_name: raw.full_name,
        email: raw.email,
        phone: raw.phone,
        birth_date: raw.birth_date,
        subscribed: raw.subscribed,
        created_at: raw.created_at
      },
      raw.id
    );
  }
}