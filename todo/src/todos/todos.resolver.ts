import { Args, Context, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { TodosService } from 'src/todos/todos.service';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';import { Post } from '@nestjs/common';

import { PubSub } from 'graphql-subscriptions';
import { User } from '@prisma/client';

const pubsub = new PubSub();
@Resolver(() => Todo)
export class TodosResolver {
    constructor(private readonly todoService: TodosService) {}

    @Subscription(() => Todo,{name:'todoAdded'},)
    async todoAdded(){
        return pubsub.asyncIterator('todoAdded');
    }

    @Query(() => Todo)
    todo(
        @Args() args: FindFirstTodoArgs
    ) {
        return this.todoService.findFirst(args)
    }

    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneTodoArgs
    ) {
        pubsub.publish('todoAdded', { todoAdded: this.todoService.createTodo(args)});
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