import { HttpException, HttpStatus } from "@nestjs/common";

export class ClientNotFound extends HttpException {
  constructor(id: string) {
    super(`Client with id ${id} was not found!`, HttpStatus.NOT_FOUND);
  }
}