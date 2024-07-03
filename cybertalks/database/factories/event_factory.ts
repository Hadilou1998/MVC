import { DateTime } from 'luxon'
import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { SpeakerFactory } from './speaker_factory.js'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(4),
      isOnLine: faker.datatype.boolean(50),
      date: DateTime.now(),
    }
  })
  .relation('speakers', () => SpeakerFactory)
  .build()