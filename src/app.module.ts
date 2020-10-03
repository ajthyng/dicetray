import { Module } from '@nestjs/common'
import { DiceTray } from './DiceTray/dice-tray.module'

@Module({
  imports: [DiceTray],
  controllers: [],
  providers: []
})
export class AppModule {}
