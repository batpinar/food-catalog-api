export async function up(knex) {
    await knex.schema.createTable('products_ingredients', (table) => {
        table.increments('id').primary(); // ID
        table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE'); // Ürün ID
        table.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('CASCADE'); // Malzeme ID
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Oluşturulma Tarihi
    });
};

export async function down(knex) {
    await knex.schema.dropTable('products_ingredients')
}