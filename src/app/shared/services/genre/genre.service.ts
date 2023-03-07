import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor( private _httpClient: HttpClient ) { }

  getAll() { 

  }

  getById(id: number) { 

  }

  create(genreToAdd: Genre) { 

  }

  update(id: number, genreToUpdate: Genre) { 

  }

  delete(id: number) { 

  }
}
