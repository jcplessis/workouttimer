import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Router, NavigationStart} from "@angular/router";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('hNYdgSkS6Mn9sSJGKuzxJVdbEa3rcS7r', 'jcplessis.eu.auth0.com', {autoParseHash: false});

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      if(authResult.idToken !== undefined) {
        localStorage.setItem('id_token', authResult.idToken);
      }
    });
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}
