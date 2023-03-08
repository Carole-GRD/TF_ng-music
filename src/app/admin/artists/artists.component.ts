import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/shared/models/artist';
import { ArtistService } from 'src/app/shared/services/artist/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit{


  listArtists : Artist[] = [];

  constructor(
    private _artistService : ArtistService,
    private _router : Router
  ) {}

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

  deleteArtist(id : number) {
    this._artistService.delete(id).subscribe({
      error : (err) => {
        console.log('erreur de suppression : ', err);
        if(err.status === 404) {
          this._router.navigateByUrl('/not-found')
        }

      },
      complete : () => {
        this._artistService.getAll().subscribe((res) => { this.listArtists = res.results });
      }
    })
  }

}
