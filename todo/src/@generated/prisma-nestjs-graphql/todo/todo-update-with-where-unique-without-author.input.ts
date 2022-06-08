import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoUpdateWithoutAuthorInput } from './todo-update-without-author.input';

@InputType()
export class TodoUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => TodoUpdateWithoutAuthorInput)
    data!: TodoUpdateWithoutAuthorInput;
}
