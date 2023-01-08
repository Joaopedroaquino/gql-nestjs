import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LeagueEntity } from "../entity/league.entity";

@Injectable()
export class PokemonService {
    constructor(@InjectRepository(LeagueEntity)private readonly leagueRepository: Repository<LeagueEntity>){ }

    async createLeague(data: any){
        const pokemon = this.leagueRepository.create()
        pokemon.name = data.name;

     const savedPokemon = await pokemon.save()

     return savedPokemon
    }

    async deletePokemon(id: string){
        const pokemon = await this.leagueRepository.findOne({where:{ id

        }});
        await this.leagueRepository.delete(id)
        return pokemon
    }

    async updatePokemon(id: string, data: any){
        const pokemon = await this.leagueRepository.findOne({where:{ id

        }})
        pokemon.name = data.name;

        await pokemon.save()

        return pokemon

    }

    async show(id: string){
        return await this.leagueRepository.findOne({where:{ id

        }})

    }

    async getAllPokemon(){
        return await this.leagueRepository.find({})
    }


}