import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isConnected : boolean = false;

  constructor(private _authService : AuthService) {}

  ngOnInit(): void {
    this._authService.isConnected$.subscribe((connectionState : boolean) => {
      console.log('ETAT CONNECTION : ', connectionState);
      this.isConnected = connectionState;
    })
  }

  disConnect() : void {
    this._authService.logout();
  }

}
