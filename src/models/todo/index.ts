import { Model } from 'objection'
import { Owner } from '../owner'

export class Todo extends Model {
  id!: string
  ownerId!: string
  task!: string
  created!: Date
  updated!: Date
  completed!: Date

  static tableName = 'todo'

  static jsonSchema = {
    type: 'object',
    required: ['task', 'ownerId'],

    properties: {
      id: { type: 'string' },
      ownerId: { type: 'string' },
      task: { type: 'string' },
      updated: { type: 'date-time' },
    },
  }

  static relationMappings = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Owner,

      join: {
        from: 'todo.ownerId',
        to: 'owner.id',
      },
    },
  })
}
