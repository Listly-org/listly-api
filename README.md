# Listly API
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/KauanR/listly-api/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/KauanR/listly-api/blob/main/README.pt-br.md)

## Sobre
REST API that provides CRUD operations to represent to-do lists. It is used in conjunction with its front-end, the [Listly APP](https://github.com/KauanR/listly-api/blob/main/src/common/routes.js).
<br/>
Made as a partial requirement for obtaining a Bachelor's degree in the subject 'Tópicos Especiais em Computação I A - URI'
<br/>
The technologies used in the development were:
* [ExpressJS](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/)


## Getting Started
### Prerequisites
You will need [NodeJS](https://nodejs.org/en/download/), a package manager of your choice and the [postgreSQL](https://www.postgresql.org/) database.

### Environment variables
In the root of the project, create a file called `.env`, with the following content, filling it with your values:
```
PORT=<port where the API will run>
DB_USER=<database user>
DB_PASS=<database user password>
DB_NAME=<database name>
DB_HOST=<database host>
APP_SECRET=<secret key for encryption (jwt) and creation of user keys>
APP_SECRET_EXPIRES=<user keys expiration time>
```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/KauanR/listly-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Run it
   ```sh
   npm start
   ```

## Utilização
The API can be used alone, however, it was developed exclusively to be the back-end of [Listly APP](https://github.com/KauanR/listly-app). The available routes can be found in the [routes file](https://github.com/KauanR/listly-api/blob/main/src/common/routes.js).

## Licensa
Distributed under the MIT License. See `LICENSE.txt` for more information.
