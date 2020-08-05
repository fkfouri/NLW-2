import Knex from 'knex';

//condicoes de subida
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()

        //criaco de relacionamento com a tabela users (FK)
        table.integer('user_id')
             .notNullable()
             .references('id')
             .inTable('users')
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
    })
}

//condicoes de parada
export async function down(knex: Knex){
    return knex.schema.dropTable('classes')

}
