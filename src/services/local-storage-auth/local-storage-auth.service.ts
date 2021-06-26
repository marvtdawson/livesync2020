import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from '../../environments/environment';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageAuthService {

  applicationToken: any;
  isLoggedInStatus = false;
  tokenName: string;
  tokenValue: string;
  localTokenValue: string;

  constructor(private router: Router) {
    this.tokenName = environment.tokenName;
    this.tokenValue = environment.token;
  }

  setLocalToken() {
    const userName = firebase.auth().currentUser.displayName;
    const userIdToken = firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
          this.applicationToken = localStorage.setItem(userName, idToken);
          console.log('Set Local Token: ' + this.applicationToken);
        })
        .catch((error) => {
          console.error('User Id Token doesn\'t exist:', error);
        });
  }
}
