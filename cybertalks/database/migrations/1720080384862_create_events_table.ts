import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title', 80).notNullable()
      table.string('slug', 80).notNullable()
      table.text('description')
      table.dateTime('date')
      table.integer('category_id').unsigned().references('categories.id')
      table.boolean('is_online')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
