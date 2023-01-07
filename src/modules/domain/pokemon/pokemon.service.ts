import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PokemonEntity } from "../entity/pokemon.entity";

@Injectable()
export class PokemonService {
    constructor(@InjectRepository(PokemonEntity)private readonly pokemonRepository: Repository<PokemonEntity>){ }

    async createPokemon(data: any){
        const pokemon = this.pokemonRepository.create()
        pokemon.name = data.name;
        pokemon.type = data.type;

     const savedPokemon = await pokemon.save()

     return savedPokemon
    }

    async deletePokemon(id: string){
        const pokemon = await this.pokemonRepository.findOne({where:{ id

        }});
        await this.pokemonRepository.delete(id)
        return pokemon
    }

    async updatePokemon(id: string, data: any){
        const pokemon = await this.pokemonRepository.findOne({where:{ id

        }})
        pokemon.name = data.name;
        pokemon.type = data.type;

        await pokemon.save()

        return pokemon

    }

    async show(id: string){
        return await this.pokemonRepository.findOne({where:{ id

        }})

    }

    async getAllPokemon(){
        return await this.pokemonRepository.find({})
    }


}