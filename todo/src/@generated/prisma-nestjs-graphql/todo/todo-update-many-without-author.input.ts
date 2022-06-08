import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutAuthorInput } from './todo-create-without-author.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutAuthorInput } from './todo-create-or-connect-without-author.input';
import { TodoUpsertWithWhereUniqueWithoutAuthorInput } from './todo-upsert-with-where-unique-without-author.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithWhereUniqueWithoutAuthorInput } from './todo-update-with-where-unique-without-author.input';
import { TodoUpdateManyWithWhereWithoutAuthorInput } from './todo-update-many-with-where-without-author.input';
import { TodoScalarWhereInput } from './todo-scalar-where.input';

@InputType()
export class TodoUpdateManyWithoutAuthorInput {

    @Field(() => [TodoCreateWithoutAuthorInput], {nullable:true})
    @Type(() => TodoCreateWithoutAuthorInput)
    create?: Array<TodoCreateWithoutAuthorInput>;

    @Field(() => [TodoCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutAuthorInput>;

    @Field(() => [TodoUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [TodoUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}
