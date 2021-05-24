import {Component, OnInit} from '@angular/core';
import {Platform, ToastController} from "@ionic/angular";
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    pageTitle = 'Home';

    constructor(public platform: Platform,
                public toastController: ToastController) {  }

    ngOnInit() {
        const info = Device.getInfo()
            .then(data => {
                console.log('Device is: ' + info );
            })
            .catch();

        const platformType = this.platform.is("android");
        console.log(platformType);
        if (platformType) {
            this.presentToast().then().catch();
        }
    }

    async presentToast() {
        const currPlatform = this.platform.platforms();
        console.log(currPlatform);
        const toast = await this.toastController.create({
            message: currPlatform.toString(),
            duration: 2500
        });
        toast.present().then().catch();
    }

}
