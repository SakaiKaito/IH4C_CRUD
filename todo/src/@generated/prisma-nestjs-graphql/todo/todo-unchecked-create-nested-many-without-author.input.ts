import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutAuthorInput } from './todo-create-without-author.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutAuthorInput } from './todo-create-or-connect-without-author.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@InputType()
export class TodoUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [TodoCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TodoCreateWithoutAuthorInput)
    create?: Array<TodoCreateWithoutAuthorInput>;

    @Field(() => [TodoCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutAuthorInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
}
