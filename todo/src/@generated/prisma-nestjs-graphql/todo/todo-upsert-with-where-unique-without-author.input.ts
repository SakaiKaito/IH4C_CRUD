import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoUpdateWithoutAuthorInput } from './todo-update-without-author.input';
import { TodoCreateWithoutAuthorInput } from './todo-create-without-author.input';

@InputType()
export class TodoUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => TodoUpdateWithoutAuthorInput)
    update!: TodoUpdateWithoutAuthorInput;

    @Field(() => TodoCreateWithoutAuthorInput, {nullable:false})
    @Type(() => TodoCreateWithoutAuthorInput)
    create!: TodoCreateWithoutAuthorInput;
}
