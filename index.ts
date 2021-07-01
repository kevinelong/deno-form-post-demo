import { Application, Router } from "https://deno.land/x/oak@v6.4.2/mod.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello world!";
});

const app = new Application()
  .use(router.routes())
  .use(router.allowedMethods());

await app.listen({ port: 8000 });