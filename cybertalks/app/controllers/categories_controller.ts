import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({ view }: HttpContext) {
    return view.render('pages/categories', {
      'pageTitle': 'Catégories d\'évènements',
    })
  }
}
