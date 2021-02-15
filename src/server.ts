import fastify from 'fastify'
import { authRoutes } from './routes'
import fastifyCors from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
import fastifyJwt from 'fastify-jwt'

function createServer() {
  const server = fastify({ logger: true })
  server.register(fastifyCors)

  server.register(fastifySwagger as any, {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'todo api',
        description: 'api documentation',
        version: '0.1.0',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'development' },
        {
          url: 'https://<production-url>',
          description: 'production',
        },
      ],
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  server.register(fastifyJwt as any, {
    secret: process.env.JWT_SECRET,
  })

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
  })

  server.register(authRoutes, { prefix: '/api/v1/auth' })

  return server
}

export default createServer
