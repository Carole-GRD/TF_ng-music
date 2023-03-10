import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre, GenreResult, GenreResultArray } from '../../models/genre';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private _genreUrl : string = 'http://localhost:8080/api/genre/';

  // private _options = {}

  constructor( private _httpClient: HttpClient ) { }

  getAll() : Observable<GenreResultArray> { 
    return this._httpClient.get<GenreResultArray>(this._genreUrl);
    // httpClient.get(url, options)
  }

  getById(id: number) : Observable<GenreResult> { 
    return this._httpClient.get<GenreResult>(this._genreUrl + id);
  }

  create(genreToAdd: Genre) : Observable<GenreResult> { 
    return this._httpClient.post<GenreResult>(this._genreUrl, genreToAdd);
    // httpClient.post(url, body, options)
  }

  update(id: number, genreToUpdate: Genre) : Observable<any> { 
    return this._httpClient.put(this._genreUrl +id, genreToUpdate);
    // httpClient.put(url, body, options)
  }

  delete(id: number) : Observable<any> { 
    return this._httpClient.delete(this._genreUrl + id);
    // httpClient.put(url, options)
  }
}
