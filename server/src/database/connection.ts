import knex from 'knex'
import path from 'path'                                             // modulo que permite caminhar entre os diretorios da aplicacao

const db = knex({
    client : 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')        // __dirname se refer ao local onde se esta o arquivo corrente
    },
    useNullAsDefault: true,                                         // exclusivo do sqlite
})



export default db;