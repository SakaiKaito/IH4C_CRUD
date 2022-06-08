import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTodosInput } from './user-update-without-todos.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodosInput } from './user-create-without-todos.input';

@InputType()
export class UserUpsertWithoutTodosInput {

    @Field(() => UserUpdateWithoutTodosInput, {nullable:false})
    @Type(() => UserUpdateWithoutTodosInput)
    update!: UserUpdateWithoutTodosInput;

    @Field(() => UserCreateWithoutTodosInput, {nullable:false})
    @Type(() => UserCreateWithoutTodosInput)
    create!: UserCreateWithoutTodosInput;
}
