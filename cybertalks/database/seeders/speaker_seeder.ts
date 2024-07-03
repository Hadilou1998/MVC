import { SpeakerFactory } from '#database/factories/speaker_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await SpeakerFactory.createMany(20)
  }
}