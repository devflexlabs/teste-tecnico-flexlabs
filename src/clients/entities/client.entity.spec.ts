import { Client } from "./client.entity"

describe("Client Entity", () => {
  it ("should create a client entity", () => {
    const client = new Client({
      full_name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      birth_date: new Date("1990-01-01"),
      subscribed: true
    })

    expect(client).toBeInstanceOf(Client)
    expect(client.full_name).toBe("John Doe")
    expect(client.email).toBe("john.doe@example.com")
    expect(client.phone).toBe("123-456-7890")
    expect(client.birth_date).toBeInstanceOf(Date)
    expect(client.subscribed).toBe(true)
    expect(client.created_at).toBeInstanceOf(Date)
  })
})