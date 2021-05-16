import  {Module}  from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import {GraphQLModule} from '@nestjs/graphql'
import { CatsModule } from "./cats/cats.module";

@Module({
  imports: 
  
  [
  CatsModule,
   GraphQLModule.forRoot({
     autoSchemaFile: 'schema.gql'
   }),
   MongooseModule.forRoot('mongodb://localhost/nest')
  ],
 
})
export class AppModule {}
