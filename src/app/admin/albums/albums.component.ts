import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/shared/models/album';
import { AlbumService } from 'src/app/shared/services/album/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{

  listAlbums : Album[] = [];

  constructor(
    private _albumService : AlbumService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this._albumService.getAll().subscribe({
      next : (res) => {
        console.log("NEXT", res);
        this.listAlbums = res.results;
      },
      error : (err) => {
        console.log("ERROR", err);
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }

  deleteAlbum(id: number) {
    this._albumService.delete(id).subscribe({
      error : (err) => {
        console.log('erreur de suppression : ', err);
        if(err.status === 404) {
          this._router.navigateByUrl('/not-found');
        }
      },
      complete : () => {
        this._albumService.getAll().subscribe((res) => { this.listAlbums = res.results });
      }
    })
  }

}
