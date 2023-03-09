import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, AlbumResult, AlbumResultArray } from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albumUrl : string = 'http://localhost:8080/api/album/';

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<AlbumResultArray> {
    return this._httpClient.get<AlbumResultArray>(this._albumUrl);
  }

  getById(id: number) : Observable<AlbumResult> {
    return this._httpClient.get<AlbumResult>(this._albumUrl + id);
  }

  create(albumToAdd: Album) : Observable<AlbumResult> {
    return this._httpClient.post<AlbumResult>(this._albumUrl, albumToAdd);
  }

  update(id: number, albumToUpdate: Album) : Observable<any> {
    return this._httpClient.put(this._albumUrl + id, albumToUpdate);
  }

  delete(id: number) : Observable<any> {
    return this._httpClient.delete(this._albumUrl + id)
  }

}
