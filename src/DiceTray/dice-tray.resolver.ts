import { Args, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class DiceTrayResolver {
  @Query(() => [String])
  roll (@Args('command') command: string) {
    return []
  }
}
