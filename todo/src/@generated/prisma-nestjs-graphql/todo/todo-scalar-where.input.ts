import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TodoScalarWhereInput {

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    AND?: Array<TodoScalarWhereInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    OR?: Array<TodoScalarWhereInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    NOT?: Array<TodoScalarWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;
}
