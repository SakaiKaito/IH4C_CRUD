import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoCreateWithoutAuthorInput } from './todo-create-without-author.input';

@InputType()
export class TodoCreateOrConnectWithoutAuthorInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoCreateWithoutAuthorInput, {nullable:false})
    @Type(() => TodoCreateWithoutAuthorInput)
    create!: TodoCreateWithoutAuthorInput;
}
