import { SpeakerFactory } from '#database/factories/speaker_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await SpeakerFactory.createMany(30)
  }
}
