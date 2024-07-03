/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router.on('/categories').render('pages/categories').as('categories')

router.on('/categories/:id').render('pages/category').as('category')

router.on('/event/:id').render('pages/event').as('event')

router.on('/contact').render('pages/contact').as('contact')
