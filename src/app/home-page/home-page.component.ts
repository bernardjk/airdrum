import { Component, OnInit } from '@angular/core';
import { waitForDebugger } from 'inspector';
import { PredictionEvent } from '../prediction-event';
import { Sounds } from '../sounds';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  // soundImgArray: string[] = [];//this will be an array of the audio locations and we will play from here
  // soundArray: string[] = [];
  soundsArray: Sounds[] = [];
  stopSound: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // for(let i = 0; i < 10;i++){
    //   this.soundImgArray[i] = "null";
    // }
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

  async addSound(){
    let predict: String; 
    this.stopSound = false;
    //reset sound image array and soundArray
    this.soundsArray = [];
    
    // for(let i = 0; i < 10;i++){
    //   this.soundImgArray[i] = "../assets/drum_imgs/blank.jpg";
    // }
    // this.updatesoundImgArray();


    for(let i = 0; i < 10;i++){
      if(this.stopSound){
        break;
      }
      predict = await this.avgPrediction();
    
      // this.soundImgArray[i] = this.predictImg(predict);
      // this.soundArray[i] = this.predictSound(predict);
      console.log(predict);
      console.log(this.Handtosound(predict));
      let sound = new Sounds(this.Handtosound(predict));
      console.log(sound);
      this.soundsArray.push(sound);
      this.updatesoundImgArray();
    }
  }

  stop(){
    this.stopSound = true;
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
    console.log(this.soundsArray);
    for(let i = 0; i < this.soundsArray.length;i++){
      let sound = this.soundsArray[i];
      let audio = new Audio();
      audio.src = sound.soundsrc;
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
    for(let i =0; i < this.soundsArray.length; i++){
      document.getElementById("square"+[i])?.setAttribute('src',this.soundsArray[i].imagesrc);
    }
  }
    
  async avgPrediction() {
    let array:String[] = [];
    let it = 0;
    //fill the array until it has 50 elements 
    while (array.length < 50){
      array[it] = this.gesture; //****************************this is the problem****************************************** */
      it++;
      //console.log(this.gesture);

      //wait 1 second to get next element
      await new Promise(f => setTimeout(f, 100));
    }
    let x = 0;
    let y = 1;
    let z: String = "";
    // console.log(array);
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


    Handtosound(predict: String){
    switch (predict) {
      case "Open Hand":
          return "Floor-Tom";
      case "Two Open Hands":
         return "Bass-Drum";
      case "Closed Hand":
          return "Hat";
      case "Two Closed Hands":
         return "Hi-Tom";
      case "Hand Pointing":
         return "Mid-Tom";
      case "Two Hands Pointing":
          return "Low-Tom";
      case "Hand Pinching":
          return "Crash-Cymbal";
      case "Two Hands Pinching":
          return "Ride";
      case "Closed Hand & Open Hand":
          return "Clap";
      case "Closed Hand & Hand Pointing":
          return "Stick";
      default:
          //for now the default case will be high-hat
          return "Hat";
    }
  }

  // predictImg(predict: String){
  //   switch (predict) {
  //     case "Open Hand":
  //         return "../assets/drum_imgs/Floor-Tom.jpg";
  //     case "Two Open Hands":
  //        return "../assets/drum_imgs/Drum_Kick.jpg";
  //     case "Closed Hand":
  //         return "../assets/drum_imgs/High-Hat.jpg";
  //     case "Two Closed Hands":
  //        return "../assets/drum_imgs/High-Tom.jpg";
  //     case "Hand Pointing":
  //        return "../assets/drum_imgs/Mid-Tom.jpg";
  //     case "Two Hands Pointing":
  //         return "../assets/drum_imgs/Low-Tom.jpg";
  //     case "Hand Pinching":
  //         return "../assets/drum_imgs/Crash_Cymbal.jpg";
  //     case "Two Hands Pinching":
  //         return "../assets/drum_imgs/Ride_Cymbal.jpg";
  //     case "Closed Hand & Open Hand":
  //         return "../assets/drum_imgs/Clap.jpg";
  //     case "Closed Hand & Hand Pointing":
  //         return "../assets/drum_imgs/Sticks.jpg";
  //     default:
  //         return "../assets/drum_imgs/Hi-Hat.jpg";
  //   }
  // }
  // predictSound(predict: String){
  //   switch (predict) {
  //     case "Open Hand":
  //         return "../assets/Floor-Tom.wav";
  //     case "Two Open Hands":
  //        return "../assets/Bass-Drum.wav";
  //     case "Closed Hand":
  //         return "../assets/Hi-Hat.wav";
  //     case "Two Closed Hands":
  //        return "../assets/Hi-Tom.wav";
  //     case "Hand Pointing":
  //        return "../assets/Mid-Tom.wav";
  //     case "Two Hands Pointing":
  //         return "../assets/Low-Tom.wav";
  //     case "Hand Pinching":
  //         return "../assets/Crash-Cymbal.wav";
  //     case "Two Hands Pinching":
  //         return "../assets/Ride-Cymbal.wav";
  //     case "Closed Hand & Open Hand":
  //         return "../assets/Clap.wav";
  //     case "Closed Hand & Hand Pointing":
  //         return "../assets/Cross-Sticks.wav";
  //     default:
  //         //for now the default case will be high-hat
  //         return "../assets/Hi-Hat.wav";
  //   }
  // }

  

}
