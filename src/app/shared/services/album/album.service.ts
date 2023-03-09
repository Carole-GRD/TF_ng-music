import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albumUrl = 'http://localhost:8080/api/album/';

  constructor(private _httpClient : HttpClient) { }

  getAll() {

  }

  getById(id: number) {

  }

  create(albumToAdd: Album) {

  }

  update(id: number, albumToUpdate: Album) {

  }

  delete(id: number){
    
  }

}
