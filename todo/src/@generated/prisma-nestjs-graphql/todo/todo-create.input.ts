import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTodosInput } from '../user/user-create-nested-one-without-todos.input';

@InputType()
export class TodoCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    detail!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTodosInput, {nullable:false})
    author!: UserCreateNestedOneWithoutTodosInput;
}
