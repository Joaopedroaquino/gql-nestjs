import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LeagueEntity } from "../entity/league.entity";

@Injectable()
export class LeagueService {
    constructor(@InjectRepository(LeagueEntity)private readonly leagueRepository: Repository<LeagueEntity>){ }

    async createLeague(data: any){
        const pokemon = this.leagueRepository.create()
        pokemon.name = data.name;

     const savedPokemon = await pokemon.save()

     return savedPokemon
    }

    async deleteLeague(id: string){
        const pokemon = await this.leagueRepository.findOne({where:{ id

        }});
        await this.leagueRepository.delete(id)
        return pokemon
    }

    async updateLeague(id: string, data: any){
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

    async getAllLeague(){
        return await this.leagueRepository.find({})
    }


}