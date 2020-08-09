import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }
  watch(){
    this.youtube.openVideo("8b3NauUofUI");
  }
  ngOnInit() {
    
  }

}
