import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/models/artist';
import { ArtistService } from 'src/app/shared/services/artist/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit{


  listArtists : Artist[] = [];

  constructor(private _artistService : ArtistService) {}

  ngOnInit(): void {
    this._artistService.getAll().subscribe({
      next : (res) => {
        console.log("NEXT", res);
        this.listArtists = res.results;
      },
      error : (err) => {
        console.log("ERROR", err);
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }

}
