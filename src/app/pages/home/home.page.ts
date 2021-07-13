import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'Home Page';
  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
    this.playLocalVideo();
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
