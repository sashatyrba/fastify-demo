import { JSONSchemaType } from 'ajv'

import { Login } from '../../types'

export const LoginSchema: JSONSchemaType<Login> = {
  type: 'object',
  properties: {
    email: { type: 'string', minLength: 5, maxLength: 128 },
    password: { type: 'string', minLength: 8, maxLength: 256 },
  },
  required: ['email', 'password'],
  additionalProperties: false,
}
