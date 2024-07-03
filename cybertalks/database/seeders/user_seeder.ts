import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
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