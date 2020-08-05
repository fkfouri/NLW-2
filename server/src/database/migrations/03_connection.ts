import Knex from 'knex'

//condicoes de subida
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()

                //criaco de relacionamento com a tabela classes (FK)
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable()

    })
}

//condicoes de parada
export async function down(knex: Knex){
    return knex.schema.dropTable('connections')

}