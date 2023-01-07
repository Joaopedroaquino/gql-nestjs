import { Args, Mutation, Query } from "@nestjs/graphql";
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

    @Mutation()
    async delete(@Args('id') id){
        await this.pokemonService.deletePokemon(id);
        return {delete: true}
    }


    @Mutation()
    async create(@Args('name') name, @Args('type') type){
        return await this.pokemonService.createPokemon({name, type});
    }





}