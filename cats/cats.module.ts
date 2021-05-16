import  {Module}  from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsResolvers } from "./cats.resolver";
import { CatsService } from "./cats.servics";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
 
  providers: [CatsResolvers , CatsService],
})
export class CatsModule {}
