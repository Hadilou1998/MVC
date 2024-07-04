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
const PagesController = () => import('#controllers/pages_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const SpeakersController = () => import('#controllers/speakers_controller')

// Pages principales
router.on('/').render('pages/home').as('home')

// Pages contact
router.get('/contact', [PagesController, 'contact']).as('contact')
router.post('/contact', async ({ request, response }) => {
    const data = await request.all()
    // console.log(data)
    response.redirect().toRoute('contact', { 'data': data })
}).as('contactForm')

// Pages catégories
router.get('/categories', [CategoriesController, 'index']).as('categories')
router.on('/categories/:id').render('pages/category').as('category')

// Pages speakers
router.get('/speakers', [SpeakersController, 'index']).as('speakers')
router.get('/speakers/new', [SpeakersController, 'create']).as('speakerCreate')
router.post('/speakers/new', async ({ request, response }) => {
    const data = await request.all()
    // console.log(data)
    response.redirect().toRoute('speakerCreate', { 'data': data })
}).as('speakerCreateForm')