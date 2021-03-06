// responsavel pela criação da tabela
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
 }) 
};

// responsavel por desfazer o erro
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
