export async function up (knex) {
    await knex.schema.createTable('products', (table) =>{
      table.increments('id').primary();
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE');
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.decimal('price', 10, 2).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').nullable();
      table.timestamp('deleted_at').nullable();
    });
  };
  
  export async function down(knex) {
    await knex.schema.dropTable('products')
}