import Knex from 'knex'

//condicoes de subida
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        table.integer('week_day').notNullable()                     //0 - domingo; 6 - sabado
        table.integer('from').notNullable()
        table.integer('to').notNullable()


        //criaco de relacionamento com a tabela classes (FK)
        table.integer('class_id')
             .notNullable()
             .references('id')
             .inTable('classes')
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
    })
}

//condicoes de parada
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule')

}
