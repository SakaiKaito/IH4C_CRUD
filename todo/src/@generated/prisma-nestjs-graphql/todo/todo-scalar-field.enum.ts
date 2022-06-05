import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    title = "title",
    detail = "detail",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
