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






