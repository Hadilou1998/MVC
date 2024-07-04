import type { HttpContext } from "@adonisjs/core/http";

export default class PagesController {
    // Logique de la route contact
    async contact({ view }: HttpContext) {
        return view.render('pages/contact', {
            'pageTitle': 'Nous Contacter',
        })
    }
}