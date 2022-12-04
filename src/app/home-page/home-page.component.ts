import { Component, OnInit } from '@angular/core';
import { waitForDebugger } from 'inspector';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  soundImgArray: string[] = [];//this will be an array of the audio locations and we will play from here
  soundArray: string[] = [];
  stopSound: boolean = false;
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 10;i++){
      this.soundImgArray[i] = "null";
    }
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }
  
  addSound(){
    let predict; 

    for(let i = 0; i < 10;i++){
      if(this.stopSound){
        break;
      }
      predict = this.getPrediction();
    
      this.soundImgArray[i] = this.predictImg(predict);
      this.soundArray[i] = this.predictSound(predict);
      this.updatesoundImgArray();
    }
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

  playSounds(){
    let currentSound;
    let audio = new Audio();
    for(let i = 0; i < this.soundImgArray.length;i++){
      setTimeout(audio.src = this.soundImgArray[i], 5);
      audio.load();
      audio.play();
    }
  }
  updatesoundImgArray() {
    for(let i =0; i < this.soundImgArray.length; i++){
      document.getElementById("square"+[i])?.setAttribute('src',this.soundImgArray[i]);
    }
  }
    
  getPrediction() {
    
    return "../assets/drum_imgs/Clap.jpg";
  }

  predictImg(predict: string){
    switch (predict) {
      case "Open Hand":
          return "../assets/drum_imgs/Floor-Tom.jpg";
      case "Two Open Hands":
         return "../assets/drum_imgs/Drum_Kick.jpg";
      case "Closed Hand":
          return "../assets/drum_imgs/High-Hat.jpg";
      case "Two Closed Hands":
         return "../assets/drum_imgs/High-Tom.jpg";
      case "Hand Pointing":
         return "../assets/drum_imgs/Mid-Tom.jpg";
      case "Two Hands Pointing":
          return "../assets/drum_imgs/Low-Tom.jpg";
      case "Hand Pinching":
          return "../assets/drum_imgs/Crash_Cymbal.jpg";
      case "Two Hands Pinching":
          return "../assets/drum_imgs/Ride_Cymbal.jpg";
      case "Hands Together":
          return "../assets/drum_imgs/Clap.jpg";
      case "Peace Sign":
          return "../assets/drum_imgs/Sticks.jpg";
      default:
          return "../assets/drum_imgs/blank.jpg";
    }
  }
  predictSound(predict: string){
    switch (predict) {
      case "Open Hand":
          return "../assets/Floor-Tom.wav";
      case "Two Open Hands":
         return "../assets/Bass-Drum.wav";
      case "Closed Hand":
          return "../assets/drum_imgs/High-Hat.jpg";
      case "Two Closed Hands":
         return "../assets/Hi-Tom.wav";
      case "Hand Pointing":
         return "../assets/Mid-Tom.wav";
      case "Two Hands Pointing":
          return "../assets/Low-Tom.wav";
      case "Hand Pinching":
          return "../assets/Crash-Cymbal.wav";
      case "Two Hands Pinching":
          return "../assets/drum_imgs/Ride_Cymbal.jpg";
      case "Hands Together":
          return "../assets/drum_imgs/Clap.jpg";
      case "Peace Sign":
          return "../assets/drum_imgs/Sticks.jpg";
      default:
          return "../assets/drum_imgs/blank.jpg";
    }
  }

}


