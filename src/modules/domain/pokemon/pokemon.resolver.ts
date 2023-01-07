import { Args, Query } from "@nestjs/graphql";
import { PokemonService } from "./pokemon.service";

export class  PokemonResolver{
    constructor(private readonly pokemonService: PokemonService){}

    @Query()
    async pokemons(){
        return await this.pokemonService.getAllPokemon()

    }

    @Query()
    async pokemon(@Args('id') id: string){
        return await this.pokemonService.show(id)

    }



}