import { EventFactory } from '#database/factories/event_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await EventFactory.with('speakers', 2).createMany(100)
  }
}