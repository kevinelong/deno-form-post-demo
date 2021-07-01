import { Application, Router } from "https://deno.land/x/oak@v6.4.2/mod.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = `
    <form method="post" action="/message/">
      <input name="message" placeholder="type here">
      <input type="submit" value="Send">
    </form>
  `;
  context.response.status = 200; //SUCCESS 200
  context.response.headers.set("Content-Type", "text/html")
});

router.post("/message/",  async(context) => {
  const body = context.request.body();
  const params = await body.value;
  context.response.body = params.get('message');
});

const app = new Application()
  .use(router.routes())
  .use(router.allowedMethods());

await app.listen({ port: 8000 });