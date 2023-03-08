import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/shared/services/artist/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent {

  artistForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _artistService : ArtistService,
    private _router : Router
  ) {
    this.artistForm = this._fb.group({
      lastname : [null , Validators.maxLength(50)],
      firstname : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      birthdate : [null],
      deathdate : [null]
    })
  }


  createArtist() : void {
    if(this.artistForm.valid) {
      this._artistService.create(this.artistForm.value).subscribe({
        next : (res) => {},
        error : (err) => {},
        complete : () => {
          this._router.navigateByUrl('/admin/artists');
        }
      })
    }
    else {
      this.artistForm.markAllAsTouched();
    }
  }
}
