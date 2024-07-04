import type { HttpContext } from '@adonisjs/core/http'

export default class SpeakersController {
  async index({ view }: HttpContext) {
    return view.render('pages/speakers', {
      'pageTitle': 'Liste des speakers',
    })
  }
}
