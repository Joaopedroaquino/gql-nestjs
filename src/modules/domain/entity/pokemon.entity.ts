import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LeagueEntity } from "./league.entity";

@Entity('pokemon')
export class PokemonEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
     id: string;

    @Column('varchar', {length: 500, unique: true})
    name: string;

    @Column('varchar', {length: 500})
    type: string;

    @ManyToOne(type => LeagueEntity, league => league.pokemons, {
        eager: true
    })
    league: LeagueEntity;
}