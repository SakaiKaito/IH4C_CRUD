import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
//import * as bcrypt from 'bcrypt';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
//import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { TodosService } from 'src/todos/todos.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';
@Resolver(() => Todo)
export class TodosResolver {
    constructor(private readonly todoService: TodosService) {}

    @Query(() => Todo)
    todo(
        @Args() args: FindFirstUserArgs
    ) {
        return this.todoService.findFirst(args)
    }

    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneUserArgs
    ) {
//        args.data.password = await bcrypt.hash(args.data.password, 10);
        return this.todoService.createTodo(args);
    }

    @Mutation(() => Todo)
    async updatetodo(
        @Args() args: UpdateOneTodoArgs,
    ) {
        return this.todoService.update(args);
    }

    @Mutation(() => Todo)
    async deletetodo(
        @Args() args: DeleteOneTodoArgs,
    ){
        return this.todoService.delete(args);
    }

    @Mutation(() => [Todo])
    async findall(
        @Args() args: FindManyTodoArgs,
    ){
        return this.todoService.findAll(args);
    }

}