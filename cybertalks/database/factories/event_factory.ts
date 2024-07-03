import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(4),
      isOnline: faker.datatype.boolean(50),
      date: faker.date.future(),
      speakers: faker.datatype.number({ min: 4, max: 10 })
    }
  })
  .build()