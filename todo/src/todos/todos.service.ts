import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
//import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';

@Injectable()
export class TodosService {
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(args: FindFirstUserArgs): Promise<Todo | null> {
        return this.prisma.todo.findFirst(args);
    }

    async findUnique(args: FindUniqueUserArgs): Promise<Todo | null> {
        return this.prisma.todo.findUnique(args);
    }

    async createTodo(args: CreateOneUserArgs): Promise<Todo> {
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