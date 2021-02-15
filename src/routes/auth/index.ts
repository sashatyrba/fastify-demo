import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import argon2 from 'argon2'

import { getOwnerByEmail } from '../../controllers'
import { AuthFailed } from '../../errors'
import { LoginSchema } from '../../schemas'

export async function authRoutes(server: FastifyInstance): Promise<void> {
  server.post(
    '/login',
    { schema: { body: LoginSchema } },
    async (
      request: FastifyRequest<{ Body: { email: string; password: string } }>,
      reply: FastifyReply
    ): Promise<void> => {
      try {
        const owner = await getOwnerByEmail(request.body.email)
        const check = await argon2.verify(owner.password, request.body.password)
        const token = await server.jwt.sign({
          ownerId: owner.id,
          expiresIn: '24h',
        })

        if (check) {
          reply.code(200).send({ token })
        } else {
          reply.code(401).send({ AuthFailed })
        }
      } catch (error) {
        reply.code(error.errorCode || 500).send({ error })
      }
    }
  )
}
