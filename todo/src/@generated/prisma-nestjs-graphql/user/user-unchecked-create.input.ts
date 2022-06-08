import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { TodoUncheckedCreateNestedManyWithoutAuthorInput } from '../todo/todo-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(8)
    password!: string;

    @HideField()
    hashedRefreshToken?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => TodoUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Todos?: TodoUncheckedCreateNestedManyWithoutAuthorInput;
}
