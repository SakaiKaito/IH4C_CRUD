import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoScalarWhereInput } from './todo-scalar-where.input';
import { Type } from 'class-transformer';
import { TodoUpdateManyMutationInput } from './todo-update-many-mutation.input';

@InputType()
export class TodoUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => TodoScalarWhereInput, {nullable:false})
    @Type(() => TodoScalarWhereInput)
    where!: TodoScalarWhereInput;

    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    data!: TodoUpdateManyMutationInput;
}
