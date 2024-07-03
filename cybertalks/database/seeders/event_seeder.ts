import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'virk',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        fullName: 'romain',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}