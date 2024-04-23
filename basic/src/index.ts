import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { use } from "hono/jsx";

const app = new Hono();

// rawResponseを返すパターン
app.get("/", (c) => {
  return new Response("Good morning!");
});

// リクエストとJson
// cってなに？ → リクエストハンドラの引数。Contextの略。
app.get("/api/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.json({
    ok: true,
    message: `Hello${name}`,
  });
});

// basic認証のミドルウェアを使用する
app.use(
  "/admin/*",
  basicAuth({
    username: "admin",
    password: "password",
  })
);

// basic認証を通過した後の処理
app.get("/admin", (c) => {
  return c.text("Welcome to admin page");
});

export default app;
