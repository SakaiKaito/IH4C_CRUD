import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodosInput } from './user-create-without-todos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodosInput } from './user-create-or-connect-without-todos.input';
import { UserUpsertWithoutTodosInput } from './user-upsert-without-todos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTodosInput } from './user-update-without-todos.input';

@InputType()
export class UserUpdateOneRequiredWithoutTodosInput {

    @Field(() => UserCreateWithoutTodosInput, {nullable:true})
    @Type(() => UserCreateWithoutTodosInput)
    create?: UserCreateWithoutTodosInput;

    @Field(() => UserCreateOrConnectWithoutTodosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodosInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput;

    @Field(() => UserUpsertWithoutTodosInput, {nullable:true})
    @Type(() => UserUpsertWithoutTodosInput)
    upsert?: UserUpsertWithoutTodosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTodosInput, {nullable:true})
    @Type(() => UserUpdateWithoutTodosInput)
    update?: UserUpdateWithoutTodosInput;
}
