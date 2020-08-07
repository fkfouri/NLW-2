# NLW#2


## docker
```docker run -it -v "${PWD}:/nlw" -w "/nlw" node /bin/bash```

```
npm --version
node --version
yarn --version
yarn gloabal add expo-cli
expo --version

```

## React

- Criando projeto: ```yarn create react-app web --template typescript```
                ou: ```npx create-react-app web --template typescript```


- Incluindo router do react

    ```yarn add react-router-dom```

Somente como dependencia de desenvolvimento, nao sera usado em producao
    ```yarn add @types/react-router-dom -D```


## Conectando os ambientes

- iniciar o server dentro da pasta server `yarn start`
- instalar a biblioteca axios `yarn add axios` que facilita o consumo de API externas.