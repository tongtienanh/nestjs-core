import { Module } from '@nestjs/common';
import { GameImplService } from './services/game-impl.service';
import { GameController } from './controllers/game.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Game} from "../../database/entities/game/game.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Game
    ])
  ],
  controllers: [GameController],
  providers: [GameImplService]
})
export class GameModule {}
