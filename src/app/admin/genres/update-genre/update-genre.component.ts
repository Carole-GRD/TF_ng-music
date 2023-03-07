import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/shared/services/genre/genre.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.scss']
})
export class UpdateGenreComponent {

  genreForm: FormGroup;
  genreId: number;


  constructor(
          private _fb : FormBuilder, 
          private _genreService : GenreService, 
          private _router : Router, 
          private _activetedRoute : ActivatedRoute
        ) {
            this.genreForm = this._fb.group({
              name : [null, [Validators.required, Validators.maxLength(50)]]
            })
            this.genreId = parseInt(this._activetedRoute.snapshot.params['id']);
          }

  
    ngOnInit() : void {
      this._genreService.getById(this.genreId).subscribe({
       
        next : (res) => {
          this.genreForm.patchValue({
            name : res.result.name
          })
        },

        error : (err) => {
          console.log('err', err);
          if (err.status === 404) {
            this._router.navigateByUrl('/not-found')
          }
          
        },

        complete : () => {

        }
      })
    }

    updateGenre() : void {
    if (this.genreForm.valid) {
      this._genreService.update(this.genreId, this.genreForm.value).subscribe({
        error : () => {},
        complete : () => {
          this._router.navigateByUrl('/admin/genres')
        }
      })
    }
    else {
      this.genreForm.markAllAsTouched();
    }
  }
}
