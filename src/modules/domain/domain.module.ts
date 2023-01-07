import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloError } from 'apollo-server-express';

@Module({
  imports: [
    ConfigModule.forRoot({
        validationSchema: Joi.object({
            NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
          PORT: Joi.number().default(3000),
          DATABASE_URL:  Joi.string().required

        })
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            return {
                name: 'default',
                type: 'postgres',
                url: configService.get('DATABASE_URL'),
                entities: [__dirname + '/**/**.entity{.ts,.js'], 
                synchronize: false
               
            } as TypeOrmModuleAsyncOptions;
        }
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        playground: true,
        typePaths: ['./**/*.graphql'],
        driver: ApolloDriver,
        context: ({req}) => ({headers: req.headers}),
        definitions: {
            path:  join(process.cwd(), 'src/graphql.schema.ts'),
            outputAs: 'class'
        }
    })
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
