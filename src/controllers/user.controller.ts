// @ts-ignore
import { Context, helpers} from "../lib/deps.ts";
// @ts-ignore
import { User } from "../model/user.model.ts";

let lastId = 5;
const users :User[] = [{
    id: 1,
    name: "pablo",
    age: 25
}, {
    id: 2,
    name: "matias",
    age: 22
}, {
    id: 3,
    name: "jose",
    age: 30
}, {
    id: 4,
    name: "maria",
    age: 28
}, {
    id: 5,
    name: "martin",
    age: 25
}]


export const findUserAll = (ctx: Context) => {
    try {
        ctx.response.status = 200;
        ctx.response.body = {
            success: true,
            data: users,
            message: "Users found"
        };
    }
    catch (error) {
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            data: null,
            message: error.message
        };
    }
}

export const findUserById = async (ctx: Context) => {
    try {
        const {id} = helpers.getQuery(ctx, {mergeParams: true});
        console.log(id);
        const user = users.find(user => user.id == id);
        if (user) {
            ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                data: user,
                message: "User found"
            };
        }
        else {
            ctx.response.status = 404;
            ctx.response.body = {
                success: false,
                data: null,
                message: "User not found"
            };
        }
    }
    catch (error) {
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            data: null,
            message: error.message
        };
    }
}

export const createUser = async (ctx: Context) => {
    try {
        const {name, age} = await ctx.request.body().value;
        const user: User = {
            id: ++lastId,
            name: name,
            age: age
        }
        users.push(user);
        ctx.response.status = 200;
        ctx.response.body = {
            success: true,
            data: user,
            message: "User created"
        };
    }
    catch (error) {
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            data: null,
            message: error.message
        };
    }
}

export const updateUser = async (ctx: Context) => {
    try {
        let {id} = helpers.getQuery(ctx, {mergeParams: true});
        const {name, age} = await ctx.request.body().value;
        const user = users.find(user => user.id == id);
        if (user) {
            user.name = name;
            user.age = age;
            ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                data: user,
            };
        } else {
            ctx.response.status = 404;
            ctx.response.body = {
                success: false,
                data: null,
                message: "User not found"
            };
        }
    }
    catch (error) {
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            data: null,
            message: error.message
        };
    }
}

export const deleteUser = async (ctx: Context) => {
    try {
        let {id} = helpers.getQuery(ctx, {mergeParams: true});
        const user = users.find(user => user.id == id);
        if (user) {
            users.splice(users.indexOf(user), 1);
            ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                data: user,
                message: "User deleted"
            };
        } else {
            ctx.response.status = 404;
            ctx.response.body = {
                success: false,
                data: null,
                message: "User not found"
            };
        }
    }
    catch (error) {
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            data: null,
            message: error.message
        };
    }
}


