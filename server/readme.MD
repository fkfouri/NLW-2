# Preparação

- Instalacao do Typescript com dependencia de desenvolvimento: ```yarn add typescript -D```

- Criar arquivo de configuracao do Typescript: ```yarn tsc --init``` ou ```npx tsc --init```

- Mudar a linha target do arquivo tsconfig.json para 'es2017'. É um padrao de conversao que o node V12 entende.

- Instalar modo desenvolvimento um conjunto de bibliotecas que executa o servidor e atualiza sempre que houver uma atualização.  ```yarn add ts-node-dev -D```

- No arquivo package.json incluir o script `ts-node-dev src/server.ts` ou `tsnd src/server.ts`

- Excutar o comando `yarn start`.

- Incluir no script as flags
    - `--transpile-only` que transforma o codigo typescript para javascript sem verificar se tem erros.
    - `--ignore-watch node_modules` ignora qualquer tentativa de converter codigo de terceiros.
    - `--respawn` restart da aplicação para qualquer modificacao.

- Inclusao do microframework chamado express `yarn add express`

- Inclusao de um tipagem para entender a biblioteca tb feita em Typescript com flag de desenvolvimento. `yarn add @types/express -D`


## Framework Express - Nodejs

Metodos: 
    - GET: Buscar ou listar uma informacao
    - POST: criar uma nova info no backend
    - PUT: Atualizar uma informacao existente
    - DELETE: Deletar uma informacao existente


Corpo (request.body): Dados para criacao ou atualizacao de um registro. Ex.: Conteudo Json
             
Route Params (request.params): Identificar qualq recurso quero atualizar ou deletar Ex.: /users/:id
              
Query ParamS (request.query): Passar os restante das coisas. Usada em paginacao, filtros, ordenacao.  Ex.: /users?page=2&sort=name
               
 
## Funcionalidas / Casos de Uso

### Entidade Conexoes

- Rota para listar o total de conexoes realizadas;
- Rota para criar uma nova conexao;

### Entidade Aulas
- Rota para criar uma aula;
- Rota para listar aulas;
    - filtrar por materia, dia da semana e horario;


## Banco de dados

Para efeito de desenvolvimento sera usado o sqlite3. `yarn add knex sqlite3`

### Knex
O knex é uma biblioteca query builder para escrever script sql sem usar sql.
Ex. select * from users 
    knex('users').select(*)

A instalaçao do Knex habilita comandos em CLI `yarn knex help`

### Migration
É um recurso para controla a versao do banco de dados.

Na raiz da pasta cria-se o arquivo knexfile.ts. Porém, o knex nao consegue ler arquivo tipo typescript, portanto, escrever no formato javascript tradicional.

Na pasta migration, as execuçoes ocorrerao na sequencia dos arquivos. Ex. 00_create_users.ts rodara antes do arquivo 01_file.ts. Esta sequencia é importante para a criação de tabelas com foreign key.

Incluir comandos de knex migrate no script do arquivo package.json. Para rodar basta usar `yarn knex:migrate`

Para visualizar se criou a tabela, utilize a extensao SQLite do VisualCode.

## Cors

Permitir que aplicacoes de diferentes portas se acessem. Ex localhost:3000 converse com localhost:3333. Por padrao, apenas aplicacoes no mesmo endereco facam acesso ao API.

`yarn add cors`

Pode ser que seja necessario incluir o type como dependencia de desenvolvimento.

`yarn add @types/cors -D` ou `npm install @types/cors`.
