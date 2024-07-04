import type { HttpContext } from '@adonisjs/core/http'
import Speaker from '#models/speaker'

export default class SpeakersController {
  async index({ view }: HttpContext) {

    const speakers = await Speaker.all()

    return view.render('pages/speakers', {
      'pageTitle': 'Liste des speakers',
      'speakers': speakers,
    })
  }

  async create({ request, response }: HttpContext) {
    const data = await request.body()
    const speaker = await Speaker.create({
      name: data.name,
      speciality: data.speciality,
      exp: data.exp,
      country: data.country
    })

    return response.ctx?.render('pages/speakers_new', {

    })
  }
}