// Honoが最初のオブジェクトであり、最後まで使われる。
import { Hono } from 'hono'

const app = new Hono()

// 以下はHono（app）が持つMethod
// app.HTTP_METHOD([path,]handler|middleware...)
// app.all([path,]handler|middleware...)
// app.on(method|method[], path|path[], handler|middleware...)
// app.use([path,]middleware)
// app.route(path, [app])
// app.basePath(path)
// app.notFound(handler) Not Foundのカスタマイズ可能
// app.onError(err, handler)  エラーハンドリング
// app.mount(path, anotherApp) // 他フレームワークをマウントする
// app.fire()
// app.fetch(request, env, event) // エントリーポイントとなる。
// app.request(path, options) // Testに便利。

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
