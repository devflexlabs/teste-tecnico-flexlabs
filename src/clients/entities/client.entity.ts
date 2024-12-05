import { randomUUID } from "node:crypto";

interface ClientProps {
  full_name: string;
  email: string;
  phone: string;
  birth_date: Date;
  subscribed: boolean;
  created_at?: Date
}

export class Client {
  private _id: string;
  private props: ClientProps
  
  constructor(
    props: ClientProps,
    id?: string,
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date()
    }
  }

  public get id (): string {
    return this._id
  }

  public set full_name (full_name: string) {
    this.props.full_name = full_name
  }

  public get full_name (): string {
    return this.props.full_name
  }

  public set email (email: string) {
    this.props.email = email
  }

  public get email (): string {
    return this.props.email
  }

  public set phone (phone: string) {
    this.props.phone = phone
  }

  public get phone (): string {
    return this.props.phone
  }

  public set birth_date (birth_date: Date) {
    this.props.birth_date = birth_date
  }

  public get birth_date (): Date {
    return this.props.birth_date
  }

  public set subscribed (subscribed: boolean) {
    this.props.subscribed = subscribed
  }

  public get subscribed (): boolean {
    return this.props.subscribed
  }

  public get created_at (): Date {
    return this.props.created_at
  }
}
