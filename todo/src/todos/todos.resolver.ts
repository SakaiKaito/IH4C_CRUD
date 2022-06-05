import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
//import * as bcrypt from 'bcrypt';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { TodosService } from 'src/todos/todos.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';

@Resolver(() => User)
export class TodosResolver {
    constructor(private readonly todoService: TodosService) {}

    @Query(() => User)
    todo(
        @Args() args: FindFirstUserArgs
    ) {
        return this.todoService.findFirst(args)
    }

    @Mutation(() => User)
    async createTodo(
        @Args() args: CreateOneUserArgs
    ) {
//        args.data.password = await bcrypt.hash(args.data.password, 10);
        return this.todoService.createTodo(args);
    }

    @Mutation(() => User)
    async update(
        @Args() args: UpdateOneTodoArgs
    ) {
        return this.todoService.update(args);
    }
}