exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('vin').unique().notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.decimal('mileage').notNullable();
    table.string('title')
    table.string('transmission')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};

// vin string required unique 
// make string required 
// model string required 
// mileage numeric required 
// title string optional 
// transmission string optional