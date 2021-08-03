import {Resolver , Query, Mutation, Args} from '@nestjs/graphql'
import { CatsService } from './cats.servics'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatInput } from './inputs/cats.input'


@Resolver ()
export class CatsResolvers {
  constructor(private readonly catsService: CatsService) {
    }
    @Query(() => String)
         async hello () {
         return "hello"
  }
    @Query(() => [CreateCatDto])
        async  cats() {
        return this.catsService.findAll()
  }
  @Mutation(() => CreateCatDto)
  async createcat(@Args ('input' ) input: CatInput) {
      return this.catsService.create(input)
  }
}
