import express from 'express'

const app = express();

app.use(express.json())                                             //prepara o express para trabalhar com json

app.get('/', (request, response) => {
    return response.json({ message: 'hello world'})
})

//http://localhost:3333
app.listen(3333);