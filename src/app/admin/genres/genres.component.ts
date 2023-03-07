import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';
import { GenreService } from 'src/app/shared/services/genre/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  listGenres : Genre[] = [];

  constructor(private _genreService : GenreService) {}

  ngOnInit() : void {
    this._genreService.getAll().subscribe({
      next : (res) => {
        console.log('NEXT', res);
        this.listGenres = res.results;
      },

      error : (err) => {
        console.log('ERROR', err);
        
      },

      complete : () => {
        console.log('COMPLETE');
        
      }
    })
  }
}
