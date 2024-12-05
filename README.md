# FlexLabs - Teste técnico

Este é um técnico criado pela equipe do FlexLabs montado para avaliar as capacidade de um programador de implementar funcionalidades em uma aplicação Backend usando NestJS + PrismaORM.

Abaixo é possível conferir as tarefas que devem ser realizadas para a conclusão do teste, instruções para realizar a entrega do código implementado, assim como o material de referência que pode ser usado como auxilio na realização do teste

## Tarefas

Segue a lista de tarefas que devem ser realizadas para concluir o teste.
Todos os itens devem ser entregues para que a submissão do teste seja considerada.

### 1. Para começar

Clone o repositório localmente na sua máquina, usando o comando

```
git  clone https://github.com/devflexlabs/teste-tecnico-flexlabs.git
```

Após ter clonado o projeto, crie uma branch local de nome qualquer para realizar o desenvolvimento do teste e faça o checkout para essaa nova branch.

### 2. Implementando funcionalidades

Na classe Service da entidade Cliente (localizada no arquivo clients.service.ts) altere o método de criação de Cliente para que ele verifique se algum cliente com o email informado no request já existe. Caso essa validação for verdadeira (cliente com email informado já existe), o método deve retornar uma exceção HTTP com um status 409.

### 3. Tratando exceções

Após realizar a verificação descrita no item acima, crie uma classe para exibir o erro de **cliente com o email informado já existe** de forma personalizada. Essa classe deve ser implementada nos mesmos moldes da classe UserNotFound, presente no código. Após isso, implemente essa classe de tratamento de exceções na verificação do método de criar clientes.

### 4. Criando novas entidades

Crie uma entidade de Produtos, que deve possuir os seguintes atributos:

- Nome (string);
- Descrição (string);
- Preço (number);
- Data de criação (Date);

A criação dessa entidade deve ser realizada no mesmo padrão estabelecido para a entidade de clientes, que foi gerada através da CLI do NestJS, através da funcionalidade de resources (conferir a documentação).

Após criar a classe Produto a nível de domínio, crie também um modelo para ela no arquivo schema.prisma e execute o comando de migração do ORM:

```
npx prisma migrate dev
```

### 5. Criando um CRUD

Agora, você deve realizar a implementação das rotas CRUD para a entidade de Produtos, seguindo o mesmo padrão estabelecido para a entidade de Clientes. A implementação dos padrões de design Mapper, View e DTO, assim como das classes de tratamento de exceções serão consideradas durante a avaliação.

Para testar o seu CRUD, você pode usar o cliente HTTP de sua preferência, mas nos arquivos do teste é possível encontrar um arquivo de rotas do Insomnia, contendo as rotas pré-criadas para a entidade Produtos e também todas as rotas relacionadas com a entidade Clientes.

### 6. Implementando relacionamentos

As entidades de Produtos e Clientes devem conter um relacionamento de Um para Muitos (um usuário pode possuir mais de um produto). Você deve criar esse relacionamento dentro do arquivo prisma.schema, mas também a nível de domínio, alterando a classe Client para que ela aceite um array de Produtos como um de seus atributos.

Após isso você deve alterar os arquivos necessários para que a aplicação seja executada sem erros (inclusive os de teste)

## Entrega

Para realizar a entrega das tarefas, realize um push da sua branch de trabalho para o github do projeto. Após isso, crie um pull request da sua branch de trabalho para a branch main.

## Materiais de Referência

Além do código pré-implementado da aplicação, você pode querer consultar a documentação das ferramentas que devem ser usadas para a realização do teste.

**Documentação do NestJS** - https://docs.nestjs.com/
**Documentação do PrismaORM** - https://www.prisma.io/docs
**ChatGPT** - https://chatgpt.com/
**Google** - https://www.google.com.

## Dúvidas

Qualquer dúvida que surgir durante a realização das tarefas, sinta-se livre para entrar em contato através do email tecnologia@grupoflex.com.br

### Boa realização do teste!
