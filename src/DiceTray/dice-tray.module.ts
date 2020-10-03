import { Module } from '@nestjs/common'
import { DiceTrayResolver } from './dice-tray.resolver'
import { DiceTrayService } from './dice-tray.service'

@Module({
  imports: [],
  controllers: [],
  providers: [
    DiceTrayResolver,
    DiceTrayService
  ],
  exports: []
})
export class DiceTray {}
