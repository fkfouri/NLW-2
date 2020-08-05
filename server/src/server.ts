import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('acessou a rota')
    return response.send('hello world1')
    //return response.json('hello world')
})

//http://localhost:3333
app.listen(3333);