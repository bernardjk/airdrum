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
  
  returnPrediction(event: PredictionEvent){
    return event.getPrediction();
  }

  addSound(){
    let predict: string; 

    for(let i = 0; i < 10;i++){
      if(this.stopSound){
        break;
      }
      predict = this.avgPrediction();
    
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

  async playSounds(){
    let audio = new Audio();
    console.log(this.soundArray);
    for(let i = 0; i < this.soundArray.length;i++){
      audio.src = this.soundArray[i];
      await this.playAudio(audio);
    }
  }

  playAudio(audio: HTMLAudioElement){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
  }

  updatesoundImgArray() {
    for(let i =0; i < this.soundImgArray.length; i++){
      document.getElementById("square"+[i])?.setAttribute('src',this.soundImgArray[i]);
    }
  }
    
  avgPrediction() {
    let array:string[] = [];
    let it = 0;
    //fill the array until it has 50 elements 
    while (array.length < 50){
      array[it] = this.returnPrediction(); //****************************this is the problem****************************************** */
      it++;
    }
    let x = 0;
    let y = 1;
    let z: string = "";
    for (var i=0; i<array.length; i++)
    {
            for (var j=i; j<array.length; j++)
            {
                    if (array[i] == array[j]){
                      x++;
                    }
                    if (y<x){
                      y=x; 
                      z = array[i];
                    }
            }
            x=0;
    }
    return z;
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
          return "../assets/Hi-Hat.wav";
      case "Two Closed Hands":
         return "../assets/Hi-Tom.wav";
      case "Hand Pointing":
         return "../assets/Mid-Tom.wav";
      case "Two Hands Pointing":
          return "../assets/Low-Tom.wav";
      case "Hand Pinching":
          return "../assets/Crash-Cymbal.wav";
      case "Two Hands Pinching":
          return "../assets/Ride-Cymbal.wav";
      case "Hands Together":
          return "../assets/Clap.wav";
      case "Peace Sign":
          return "../assets/Cross-Sticks.wav";
      default:
          return "null";
    }
  }

  

}


