import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'Home Page';
  constructor(private videoPlayer: VideoPlayer,
              private platform: Platform) { }

  ngOnInit() {
    this.playLocalVideo();
    console.log('Mobile: ' + this.platform.is('mobile'));
    console.log('Desktop: ' + this.platform.is('desktop'));
    console.log('Android: ' + this.platform.is('android'));
    console.log('iOS: ' + this.platform.is('ios'));
    console.log('Tablet: ' + this.platform.is('tablet'));
  }

  playLocalVideo() {
    const vidPlayer = this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4')
        .then(() => {
          console.log('Video Played!!!');
        })
        .catch(err => {
          console.log('We got this error: ' + err);
        });
  }

}
