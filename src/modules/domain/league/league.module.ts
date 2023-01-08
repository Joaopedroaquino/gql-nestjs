import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeagueEntity } from "../entity/league.entity";
import { LeagueService } from "./league.service";

@Module({
    imports:[TypeOrmModule.forFeature([ LeagueEntity])],
    providers:[LeagueService,],
    exports:[LeagueService, ]


})

export class PokemonModule{}