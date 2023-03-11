// @ts-ignore
import { Application } from "./lib/deps.ts"
// @ts-ignore
import { userRouter } from "./routes/user.router.ts"

const app = new Application();
const PORT = 3000;

app.use(userRouter.routes());
app.listen({ port: PORT });
console.log(`Listening on port ${PORT}`);
