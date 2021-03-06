import { Args, Query, Resolver } from "@nestjs/graphql";
import { Album } from "./graph.album.entity";
import { AlbumQueryService } from "./album.query.service";
import { Musician } from "../musician/graph.musician.entity";
import { Song } from "../song/graph.song.entity";

@Resolver()
export class AlbumResolver {
  constructor(private albumQueryService: AlbumQueryService) {}

  @Query(() => [Album])
  async getAllAlbum(): Promise<Album[]> {
    return await this.albumQueryService.getAllAlbum();
  }

  @Query(() => [Musician])
  async getMusicianByAlbum(
    @Args("id", { type: () => String }) id: string
  ): Promise<Musician[]> {
    return await this.albumQueryService.getMusicianByAlbum(id);
  }

  @Query(() => [Song])
  async getSongByAlbum(
    @Args("id", { type: () => String }) id: string
  ): Promise<Song[]> {
    return await this.albumQueryService.getSongByAlbum(id);
  }
}
