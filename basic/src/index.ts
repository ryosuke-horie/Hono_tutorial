import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// リクエストとJson 
// cってなに？ → リクエストハンドラの引数。Contextの略。
app.get('/api/hello/:name', (c) => {
    const name = c.req.param('name')
    return c.json({ 
        ok: true,
        message: 'Hello' + name
    })
})

export default app
