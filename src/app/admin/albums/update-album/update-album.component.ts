import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/shared/services/album/album.service';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.scss']
})
export class UpdateAlbumComponent implements OnInit {

  albumForm : FormGroup;
  albumId : number;

  constructor(
    private _fb : FormBuilder,
    private _albumService : AlbumService,
    private _router : Router,
    private _activetedRoute : ActivatedRoute
  ) {
    this.albumForm = this._fb.group({
      title : [null, [Validators.required, Validators.maxLength(50)]]
    })
    this.albumId = parseInt(this._activetedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._albumService.getById(this.albumId).subscribe({
      next : (res) => {
        this.albumForm.patchValue({
          title : res.result.title
        })
      },
      error : (err) => {
        console.log(err);
        if (err.status === 404) {
          this._router.navigateByUrl('/not-found');
        }
        
      },
      complete : () => {},
    })
  }

  updateAlbum() {
    if (this.albumForm.valid) {
      this._albumService.update(this.albumId, this.albumForm.value).subscribe({
        error : () => {},
        complete : () => {
          this._router.navigateByUrl('/admin/albums');
        }
      })
    }
    else {
      this.albumForm.markAllAsTouched();
    }
  }

}
