# Controllers

Les contrôleurs sont des classes qui représentent les routes HTTP.
Ils sont utilisés pour récupérer les données de la base de données et les afficher dans les templates.

## Utilisation d'un contrôleur

Pour utiliser un contrôleur, il faut importer le fichier dans une route.

```ts
import CategoriesController from '#controllers/categories_controller'
```

Et il suffira ensuite de l'utiliser dans la route.

```ts
router.get('/categories', [CategoriesController, 'index']).as('categories')
```

## Création d'un contrôleur

Pour créer un contrôleur, il faut créer un fichier dans le dossier `app/controllers` et le nommer comme le nom de la table dans la base de données.

Mais avec la commande `node ace make:controller` ce sera automatiquement fait pour vous.

```bash
node ace make:controller Categories
```

Vous devriez avoir un fichier `app/controllers/categories_controller.ts` avec le contenu suivant:

```ts
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({ view }: HttpContext) {
    return view.render('pages/categories', {
      'pageTitle': 'Catégories d\'évènements',
    })
  }
}
```

Dans cet exemple, lors du rendu de la page, nous affichons le contenu de la 
vue `pages/categories.edge` avec le titre `Catégories d'évènements` en tant que variable qui sera disponible dans le template.
