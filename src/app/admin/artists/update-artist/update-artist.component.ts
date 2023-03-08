import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/shared/services/artist/artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss']
})
export class UpdateArtistComponent implements OnInit {
  
  artistForm : FormGroup;
  artistId : number;

  constructor(
    private _fb : FormBuilder,
    private _artistService : ArtistService,
    private _router : Router,
    private _activetedRoute : ActivatedRoute
  ) {
    this.artistForm = this._fb.group({
      firstname : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      lastname : [null , Validators.maxLength(50)],
      birthdate : [null],
      deathdate : [null]
    })
    this.artistId = parseInt(this._activetedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._artistService.getById(this.artistId).subscribe({
      next : (res) => {
        console.log("NEXT", res);
        res.result.birthdate = new Date(res.result.birthdate);
        this.artistForm.patchValue({
          firstname : res.result.firstname,
          lastname : res.result.lastname,
          birthdate : `${res.result.birthdate.getFullYear()}-${(res.result.birthdate.getMonth()+1 < 10 ) ? '0'+(res.result.birthdate.getMonth()+1) : (res.result.birthdate.getMonth()+1) }-${(res.result.birthdate.getDate() < 10 ) ? '0'+ res.result.birthdate.getDate() : res.result.birthdate.getDate()}`,
          deathdate : res.result.deathdate
        })
      },
      error : (err) => {
        console.log("ERROR", err);
        if(err.status === 404) {
          this._router.navigateByUrl('/not-found')
        }

      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }


  updateArtist() {
    if (this.artistForm.valid) {
      this._artistService.update(this.artistId, this.artistForm.value).subscribe({
        error : () => {},
        complete : () => {
          this._router.navigateByUrl('/admin/artists')
        }
      })
    }
    else {
      this.artistForm.markAllAsTouched();
    }
  }

}
