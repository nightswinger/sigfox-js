import { rest } from 'msw'

const sigfox = (path) => {
  return new URL(`/v2${path}`, 'https://api.sigfox.com').toString()
}

export const handlers = [
  rest.get(sigfox('/get'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),
  rest.post(sigfox('/post'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),
  rest.put(sigfox('/put'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),
  rest.delete(sigfox('/delete'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    )
  })
]