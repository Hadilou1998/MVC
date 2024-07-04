import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        name: 'CyberSec',
        slug: 'cybersec',
      },
      {
        name: 'DevOps',
        slug: 'devops',
      },
      {
        name: 'DevSec',
        slug: 'devsec',
      },
      {
        name: 'Forensics',
        slug: 'forensics',
      },
    ])
  }
}
