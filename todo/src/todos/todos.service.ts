import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';

@Injectable()
export class TodosService {
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(args: FindFirstTodoArgs): Promise<Todo | null> {
        return this.prisma.todo.findFirst(args);
    }

    async findUnique(args: FindUniqueTodoArgs): Promise<Todo | null> {
        return this.prisma.todo.findUnique(args);
    }

    async createTodo(args: CreateOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.create(args);
    }
    async update(args: UpdateOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.update(args);
    }

    async delete(args: DeleteOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.delete(args);
    }

    async findAll(args: FindManyTodoArgs): Promise<Todo[] | null>{
        return this.prisma.todo.findMany();
    }

/*    async update(
        user: User,
        title: string,
        detail: string,
    ): Promise<void> {
        await this.prisma.todo.update({
            where:{ id: user.id },
            data: { title:{ set: title}, detail:{ set: detail}}
        });
    }
*/
}