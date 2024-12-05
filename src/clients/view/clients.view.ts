import { Client } from "../entities/client.entity";

export class ClientsView {
  static toHttp (client: Client) {
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
}