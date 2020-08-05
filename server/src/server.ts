import express from 'express'

const app = express();

//prepara o express para trabalhar com json
app.use(express.json())

/** Metodos: 
 * GET: Buscar ou listar uma informacao
 * POST: criar uma nova info no backend
 * PUT: Atualizar uma informacao existente
 * DELETE: Deletar uma informacao existente
 * 
 * 
 * Corpo (request.body): Dados para criacao ou atualizacao de um registro. Ex.: Conteudo Json
 *              
 * Route Params (request.params): Identificar qualq recurso quero atualizar ou deletar Ex.: /users/:id
 *              
 * Query ParamS (request.query): Passar os restante das coisas. Usada em paginacao, filtros, ordenacao.  Ex.: /users?page=2&sort=name
 *              
 */

app.get('/users', (request, response) => {
    console.log('acessou a rota')
    return response.send('hello world1')
    //return response.json('hello world')
})

app.post('/users', (request, response) => {
    console.log(request.body)

    const users = [{name: 'fabio', age:41}, ]

    return response.json(users)
    //return response.json('hello world')
})


app.delete('/users/:id', (request, response) => {
    console.log(request.params)
    return response.send('Removido user ' + request.params.id)
})

//http://localhost:3333
app.listen(3333);