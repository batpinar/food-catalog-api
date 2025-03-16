export async function up (knex) {
    await knex.schema.createTable('categories', (table) =>{
      table.increments('id').primary();
      table.integer('category_id')
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').nullable();
      table.timestamp('deleted_at').nullable();
    });
  };
  
  export async function down(knex) {
    await knex.schema.dropTable('categories')
}