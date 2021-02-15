import { Model } from 'objection'

export class Owner extends Model {
  id!: string
  email!: string
  password!: string

  static tableName = 'owner'

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password'],

    properties: {
      id: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    },
  }
}
