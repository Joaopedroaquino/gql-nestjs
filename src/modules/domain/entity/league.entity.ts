import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PokemonEntity } from "./pokemon.entity";

@Entity()
export class LeagueEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('varchar', {length: 500, unique: true})
    name: string

    @OneToMany(type => PokemonEntity, pokemon => pokemon.league)
    pokemons: PokemonEntity[]
}