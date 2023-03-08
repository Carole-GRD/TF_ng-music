import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist, ArtistResult, ArtistResultArray } from '../../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private _genreUrl : string = 'http://localhost:8080/api/artist/';

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<ArtistResultArray> {
    return this._httpClient.get<ArtistResultArray>(this._genreUrl);
  }

  getById(id: number) : Observable<ArtistResult> {
    return this._httpClient.get<ArtistResult>(this._genreUrl + id);
  }

  create(artistToAdd: Artist) : Observable<ArtistResult> {
    return this._httpClient.post<ArtistResult>(this._genreUrl, artistToAdd);
  }

  update(id: number, artistToUpdate: Artist) : Observable<any> {
    return this._httpClient.put(this._genreUrl + id, artistToUpdate);
  }

  delete(id: number) : Observable<any> {
    return this._httpClient.delete(this._genreUrl + id);
  }

}
