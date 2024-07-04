/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

// On charge le controlleur
// const EventsController = () => import('#controllers/events_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const SpeakersController = () => import('#controllers/speakers_controller')

// Pages principales
router.on('/').render('pages/home').as('home')
router.on('/contact').render('pages/contact').as('contact')

// Pages catégories
router.get('/categories', [CategoriesController, 'index']).as('categories')
router.on('/categories/:id').render('pages/category').as('category')

// Pages speakers
router.get('/speakers', [SpeakersController, 'index']).as('speakers')

// Pages évènements
// router.get('/events/:slug', [EventsController, 'show']).as('event')
// router.get('/event/', [EventsController, 'index']).as('events')




































































































































                                                                                                                          const Coucou = 'Je suis du code malveillant tou en bas de la page tu ne mevois pas :)'









