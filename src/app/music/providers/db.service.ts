import { Injectable } from "@angular/core";
import * as low from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import * as _ from 'lodash'
import * as path from 'path'

@Injectable()
export class DBService {
  db;
  constructor() {
    const adapter = new FileSync("../db.json");
    this.db = low(adapter);
    this.db.defaults({ musics: {} }).write();
  }
  musics(){
    const db = this.db
    return {
      musics: db.get("musics").value(),
      artists: function () {
        const artistsDB = db.value().musics.artists
        return Object.keys(artistsDB).map(key => {
          const artist = artistsDB[key]
          console.log(artist)
          return {
            name: key,
            nbAlbums: Object.keys(artistsDB[key].albums).length
          }
        })
      },
      albums: function () {
        const path = db.value().musics.artists[name].albums;
        return Object.keys(path).map(key => {
          return {
            name: key,
            nbTitles: Object.keys(path[key]).length
          }
        })
      },
      album: function (artist, _album) {
        console.log(artist, _album)
        const album = db.value().musics.artists[artist].albums[_album];
        album.name = _album
        return album
      },
      artist: function (name) {

        const artist = db.value().musics.artists[name];
        artist.name = name
        artist.albums = Object.keys(artist.albums).map(key=>{
          const album = artist.albums[key]
          return this.album(name, key)
        })
        return artist
      },
      import: function (music) {
        db.set('musics.artists.' + music.artist + '.albums.' + music.album + ".titles." + music.title, music).write()
      }
    }

  }
}
