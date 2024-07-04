import { DateTime } from 'luxon'
import Speaker from '#models/speaker'
import { BaseModel, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Category from './category.js'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare isOnline: boolean

  @column.dateTime()
  declare date: DateTime

  @manyToMany(() => Speaker, {
    localKey: 'id',
    pivotForeignKey: 'event_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'speaker_id',
    pivotTable: 'events_speakers',
  })
  declare speakers: ManyToMany<typeof Speaker>

  @hasOne(() => Category, {
    localKey: 'id',
    foreignKey: 'category_id',
  })
  declare category: HasOne<typeof Category>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
