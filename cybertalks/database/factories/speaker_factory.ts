import factory from '@adonisjs/lucid/factories'
import Speaker from '#models/speaker'

export const SpeakerFactory = factory
  .define(Speaker, async ({ faker }) => {
    return {
      name: faker.person.fullName(),
      speciality: faker.lorem.word(),
      exp: faker.number.int({ min: 4, max: 10 }),
      country: faker.location.country(),
    }
  })
  .build()
