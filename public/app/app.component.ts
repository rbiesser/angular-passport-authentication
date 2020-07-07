import { Component } from '@angular/core';
// added AuthenticationService
import { AuthenticationService } from './authentication/authentication.service';
// added Router
import { Router } from '@angular/router';

@Component({
  selector: 'mean-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private _authenticationService: AuthenticationService, private router: Router) { }
}