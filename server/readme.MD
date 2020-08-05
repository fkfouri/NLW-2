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
               
 



