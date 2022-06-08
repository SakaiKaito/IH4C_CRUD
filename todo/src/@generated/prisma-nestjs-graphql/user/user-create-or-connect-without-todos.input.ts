import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodosInput } from './user-create-without-todos.input';

@InputType()
export class UserCreateOrConnectWithoutTodosInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTodosInput, {nullable:false})
    @Type(() => UserCreateWithoutTodosInput)
    create!: UserCreateWithoutTodosInput;
}
