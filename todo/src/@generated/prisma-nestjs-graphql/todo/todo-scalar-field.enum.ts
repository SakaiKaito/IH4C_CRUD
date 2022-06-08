import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    title = "title",
    detail = "detail",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorId = "authorId"
}


registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
