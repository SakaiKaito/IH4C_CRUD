import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class TodoWhereInput {

    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    detail?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;
}
