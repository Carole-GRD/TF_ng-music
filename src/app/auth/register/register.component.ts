import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup

  constructor(
    private _fb : FormBuilder,
    private _authService : AuthService
  ) {
    this.registerForm = this._fb.group({
      lastname : [null, Validators.required],
      firstname : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
    })
  }

  createAccount() {
    if(this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        
        next : (res) => {
          // Mettre dans le localStorage, notre token + autres infos

          // Gestion observable pour savoir si une personne est connectée

        },

        error : (err) => {
          // TODO : gestion de l'erreur email unique
        },

        complete : () => {
          // Redirection vers accueil
        },
      
      })
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
