import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
// import firebase from 'firebase/app';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TermsOfServicePage} from "../terms-of-service/terms-of-service.page";
import {PrivacyPage} from "../privacy/privacy.page";
import {LocalStorageAuthService} from "../../../services/local-storage-auth/local-storage-auth.service";
import firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Login Page';
  constructor(private localStorageAuthService: LocalStorageAuthService,
              private http: HttpClient,
              private router: Router) { }

  ui = new firebaseui.auth.AuthUI(firebase.auth());

  ngOnInit() {

    const uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this),
        tosUrl: TermsOfServicePage,
        privacyPolicyUrl: PrivacyPage
      }
    };

    // Render the FirebaseUI Auth Interface
    // The start method will wait until the DOM is loaded
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  onLoginSuccessful(authResult) {
    this.localStorageAuthService.setLocalToken();
    console.log('This is the result of the log in: ' + authResult);
    this.router.navigateByUrl('/admin').then().catch();
  }

}
