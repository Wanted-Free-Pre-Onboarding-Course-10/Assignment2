import { Module } from '@nestjs/common';
import { MusicianModule } from './musician/musician.module';
import { SongModule } from './song/song.module';
import { AlbumModule } from './album/album.module';
import { Neo4jModule } from './neo4j/neo4j.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Neo4jService } from './neo4j/neo4j.service';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: 'e0f0bfda.databases.neo4j.io',
      port: 7687,
      username: 'neo4j',
      password: 'f83YWstyvP9iBxvbtZZpPZh_j7mpq3PXZTFrjntIfaU'
    })
    ,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl'
    }),
    MusicianModule, 
    SongModule, 
    AlbumModule, 
    Neo4jModule,
  ],
  controllers: [],
  providers: [],
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule {}
>>>>>>> c86b86f (Feat: Add album service)
