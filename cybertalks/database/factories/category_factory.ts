import factory from '@adonisjs/lucid/factories'
import Category from '#models/category'
import { EventFactory } from './event_factory.js'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    const name = faker.lorem.word()
    return {
      'name': name,
      'slug': faker.helpers.slugify(name),
    }
  })
  .relation('events', () => EventFactory)
  .build()