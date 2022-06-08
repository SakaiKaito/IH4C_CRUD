import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @Validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsNotEmpty()'})
    title!: string;

    @Field(() => String, {nullable:false})
    detail!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => Int, {nullable:false})
    authorId!: number;
}
