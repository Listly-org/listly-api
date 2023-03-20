# Listly API
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/KauanR/listly-api/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/KauanR/listly-api/blob/main/README.pt-br.md)

## Sobre
API REST que provê operações CRUD para representar listas de afazeres. Sua utilização é feita em conjunto com o seu front-end, o [Listly APP](https://github.com/KauanR/listly-api/blob/main/src/common/routes.js).
<br/>
Feita como requisito parcial para a obtenção do grau de Bacharel na disciplina de 'Tópicos Especiais em Computação I A - URI'.
<br/>
As tecnologias utilizadas no desenvolvimento foram:
* [ExpressJS](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/)


## Começando
### Pré-requisitos
Você precisará do [NodeJS](https://nodejs.org/en/download/), um gerenciador de pacotes de sua escolha e do banco de dados [postgreSQL](https://www.postgresql.org/).

### Variáveis de ambiente
Na raiz do projeto, crie um arquivo chamado `.env`, com o seguinte conteúdo, preencendo-o com os seus valores:
```
PORT=<porta onde a API irár rodar>
DB_USER=<usuário do banco de dados>
DB_PASS=<senha do usuário do banco de dados>
DB_NAME=<nome do banco de dados>
DB_HOST=<host do banco de dados>
APP_SECRET=<chave secreta para a encriptação(jwt) e criação das chaves de usuário>
APP_SECRET_EXPIRES=<tempo de expiração das chaves de usuário>
```

### Instalação
1. Clone o repositório
   ```sh
   git clone https://github.com/KauanR/listly-api
   ```
2. Instale os pacotes
   ```sh
   npm install
   ```
4. Execute-o
   ```sh
   npm start
   ```

## Utilização
A API pode ser utilizada isoladamente, entretanto, foi desenvolvida pensada exclusivamente para ser o back-end do [Listly APP](https://github.com/KauanR/listly-app). As rotas disponilizadas podem ser encontradas no [arquivo de rotas](https://github.com/KauanR/listly-api/blob/main/src/common/routes.js).

## Licensa
Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.
