# Models

Les modèles sont des classes qui représentent les données de la base de données.
Ces modèles sont destinés entre autres à être utilisés par les contrôleurs au travers de l'ORM.

L'ORM est un système de mapping entre les modèles et la base de données.
Celui d'AdonisJS se nomme Lucid. Il permet de faire des requêtes SQL et de les mapper vers des modèles.

## Création d'un modèle

Pour créer un modèle, il faut créer un fichier dans le dossier `app/models` et le nommer comme le nom de la table dans la base de données.

Mais avec la commande `node ace make:model` ce sera automatiquement fait pour vous.

```bash
node ace make:model User
```

Vous devriez avoir un fichier `app/models/user.ts` avec le contenu suivant:

```ts
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
```

## Utilisation d'un modèle

Pour utiliser un modèle, il faut importer le fichier dans un contrôleur.

```ts
import User from '#models/user'
```

Et il suffira ensuite de l'utiliser dans le contrôleur.
