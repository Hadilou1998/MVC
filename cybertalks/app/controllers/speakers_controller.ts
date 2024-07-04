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
    console.log(data)
    const speaker = await Speaker.create({
      name: "Hadil",
      speciality: "Développeur",
      exp: 8,
      country: "Worldwide",
    })

    return response.ctx?.view.render('pages/speakers_new')
  }
}