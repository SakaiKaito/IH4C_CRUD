import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    detail?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserAvgOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: UserMinOrderByAggregateInput;

    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSumOrderByAggregateInput;
}
