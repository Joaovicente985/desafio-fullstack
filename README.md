<div align="flex-start">
    <h1>
    @Contacts
    </h1>
    <p>@Contacts é uma API que simula uma agenda utilizando ExpressJS, TypeORM e Bcryptjs.</p>
</div>

<br>

<div align="flex-start">
    <h2>
    Instalando as dependências
    </h2>
    <p>Para inciar este projeto, é necessário instalar as dependências. Você deve acessar a pasta do frontEnd ou backEnd e utilizar seu devido comando para instalar as dependências:</p>
</div>

```bash
Backend:
# acessando a pasta do backend
cd backEnd

# instalando as dependências
# caso use yarn
npm run i

# caso use yarn
yarn
```

```bash
Frontend:
# acessando a pasta do frontend
cd frontEnd

# instalando as dependências
# caso use npm
npm run i

# caso use yarn
yarn
```

<br>

<div align="felx-start">
    <h2>
    Aplicar as migrações e gerar tabelas
    </h2>
    <p>Para gerar as tabelas com o TypeORM, é necessário utilizar o comando abaixo:</p>
</div>

```bash
Na pasta do frontEnd:
# caso use npm
npm run typeorm migration:run -- -d ./src/data-source.ts

# caso use yarn
yarn typeorm migration:run -d ./src/data-source.ts
```

<div align="flex-start">
    <h2>
    Rodando a aplicação localmente
    </h2>
    <p>Para rodar a aplicação localmente, é necessário acessar a pasta de cada uma e utilizar o comando abaixo:</p>
</div>

```bash
Backend:
# acessando a pasta do backend
cd backEnd

## rodando a aplicação localmente
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

```bash
Frontend:
# acessando a pasta do frontend
cd frontEnd

## rodando a aplicação localmente
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

<div align="flex-start">
    <h2>
    Rodando e visualizando a documentação do projeto
    </h2>
    <p>Para visualizar a documentação, acesse a pasta /documentation através do seu terminal e digite o comando</p>
</div>

```bash
# acessando a pasta da documentação
cd documentation

# rode o comando abaixo e acesse o endpoint para visualizar a documentação
npx serve
```
