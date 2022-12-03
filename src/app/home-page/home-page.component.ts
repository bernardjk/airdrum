import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  constructor() { }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

  playBass(){
    let audio = new Audio();
    audio.src = "../assets/Bass-Drum.wav";
    audio.load();
    audio.play();
  }
  playHi(){
    let audio = new Audio();
    audio.src = "../assets/Hi-Tom.wav";
    audio.load();
    audio.play();
  }
  playMid(){
    let audio = new Audio();
    audio.src = "../assets/Mid-Tom.wav";
    audio.load();
    audio.play();
  }
  playLow(){
    let audio = new Audio();
    audio.src = "../assets/Low-Tom.wav";
    audio.load();
    audio.play();
  }
  playFloor(){
    let audio = new Audio();
    audio.src = "../assets/Floor-Tom.wav";
    audio.load();
    audio.play();
  }
  playCrash(){
    let audio = new Audio();
    audio.src = "../assets/Crash-Cymbal.wav";
    audio.load();
    audio.play();
  }
  playHat(){
    let audio = new Audio();
    audio.src = "../assets/Hi-Hat.wav";
    audio.load();
    audio.play();
  }
  playRide(){
    let audio = new Audio();
    audio.src = "../assets/Ride-Cymbal.wav";
    audio.load();
    audio.play();
  }
  playClap(){
    let audio = new Audio();
    audio.src = "../assets/Clap.wav";
    audio.load();
    audio.play();
  }
  playStick(){
    let audio = new Audio();
    audio.src = "../assets/Cross-Sticks.wav";
    audio.load();
    audio.play();
  }


}
