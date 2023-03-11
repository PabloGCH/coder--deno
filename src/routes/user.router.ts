// @ts-ignore
import { Router } from '../lib/deps.ts';
// @ts-ignore
import { findUserAll, findUserById, createUser, updateUser, deleteUser} from "../controllers/user.controller.ts";

const router = new Router()
.get('/users', findUserAll)
.get('/users/:id', findUserById)
.post('/users', createUser)
.put('/users/:id', updateUser)
.delete('/users/:id', deleteUser)




export const userRouter = router;
