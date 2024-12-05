import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  birth_date: Date;

  @IsBoolean()
  @IsNotEmpty()
  subscribed: boolean;
}
