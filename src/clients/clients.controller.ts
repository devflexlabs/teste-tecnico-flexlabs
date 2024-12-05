import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsView } from './view/clients.view';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() body: CreateClientDto) {
    const client = await this.clientsService.create(body)
    return {
      message: 'Client created successfully!',
      client: ClientsView.toHttp(client)
    };
  }

  @Get()
  async findAll() {
    const clients = await this.clientsService.findAll(); 
    return {
      message: "Clients found!",
      clients: clients.map(ClientsView.toHttp)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const client = await this.clientsService.remove(id)
    return {
      message: 'Client deleted successfully!',
      client: ClientsView.toHttp(client)
    };
  }
}
