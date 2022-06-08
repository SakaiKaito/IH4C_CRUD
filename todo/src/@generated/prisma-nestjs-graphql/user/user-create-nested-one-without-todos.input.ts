import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodosInput } from './user-create-without-todos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodosInput } from './user-create-or-connect-without-todos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTodosInput {

    @Field(() => UserCreateWithoutTodosInput, {nullable:true})
    @Type(() => UserCreateWithoutTodosInput)
    create?: UserCreateWithoutTodosInput;

    @Field(() => UserCreateOrConnectWithoutTodosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodosInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
