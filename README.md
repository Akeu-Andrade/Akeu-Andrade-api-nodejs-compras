# Akeu-Andrade-api-nodejs-compras

## Descrição
Este projeto é uma API de compras desenvolvida em Node.js. Ele permite adicionar produtos a um carrinho de compras, atualizar a quantidade de produtos e tratar erros como carrinho ou produto não encontrado.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- TypeScript
- Docker

## Pré-requisitos
- Docker e Docker Compose instalados
- Node.js e npm instalados

## Configuração do Ambiente
1. Clone o repositório:
    ```bash
    git clone https://github.com/Akeu-Andrade/api-nodejs-compras.git
    cd akeu-andrade-api-nodejs-compras
    ```

2. Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:
    ```properties
    DATABASE_URL="mongodb://akeu:akeu@mongodb:27017/?retryWrites=true&w=majority&appName=mongo"
    MONGO_EXTERNAL_PORT=27019
    NODE_EXTERNAL_PORT=3000
    MONGO_EXPRESS_EXTERNAL_PORT=8081
    MONGO_USERNAME=akeu
    MONGO_PASSWORD=akeu
    NODE_ENV=development
    ```

## Executando a Aplicação
1. Construa e inicie os containers Docker:
    ```bash
    docker-compose up --build
    ```

2. A API estará disponível em `http://localhost:3000`.
