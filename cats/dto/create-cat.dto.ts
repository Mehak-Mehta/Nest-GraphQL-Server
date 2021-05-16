import { Field, ObjectType  , Int } from '@nestjs/graphql';


@ObjectType()
export class CreateCatDto {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}