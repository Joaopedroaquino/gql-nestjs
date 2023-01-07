import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonEntity } from "../entity/pokemon.entity";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

@Module({
    imports:[TypeOrmModule.forFeature([ PokemonEntity])],
    providers:[PokemonService, PokemonResolver],
    exports:[PokemonService, PokemonResolver]


})

export class PokemonModule{}