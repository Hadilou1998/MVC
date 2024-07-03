import type { HttpContext } from '@adonisjs/core/http'

export default class EventsController {
    async eventShow({ view }: HttpContext) {
        return view.render('pages/event', {
            'title': 'Tous les évenements Cybertalks',
            'speakers': [
                {'name': 'Martin JSX'},
                {'name': 'Martine EJS'},
                {'name': 'Alain de TypeScript'},
                {'name': 'Ahmed Ben React'},
                {'name': 'Salif Si Adonis'},
            ],
        })
    }
}