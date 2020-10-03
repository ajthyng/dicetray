import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DiceTray } from './DiceTray/dice-tray.module'

@Module({
  imports: [
    DiceTray,
    GraphQLModule.forRoot({
      path: '/api',
      autoSchemaFile: true,
      playground: true,
      introspection: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
