export class Sounds {
    type:String;
    imagesrc:string;
	soundsrc:string;


	constructor(type:String) {
		if(type == "Bass-Drum"){
            this.imagesrc = "../assets/drum_imgs/Drum-Kick.jpg";
            this.soundsrc = "../assets/Bass-Drum.wav";
        }
        else if(type == "Hi-Tom")
        {
            this.imagesrc = "../assets/drum_imgs/High-Tom.jpg"
            this.soundsrc = "../assets/Hi-Tom.wav";
        }
        else if(type == "Mid-Tom")
        {
            this.imagesrc = "../assets/drum_imgs/Mid-Tom.jpg"
            this.soundsrc = "../assets/Mid-Tom.wav";
        }
        else if(type == "Low-Tom")
        {
            this.imagesrc = "../assets/drum_imgs/Low-Tom.jpg"
            this.soundsrc = "../assets/Low-Tom.wav";
        }
        else if(type == "Floor-Tom")
        {
            this.imagesrc = "../assets/drum_imgs/Floor-Tom.jpg"
            this.soundsrc = "../assets/Floor-Tom.wav";
        } 
        else if(type == "Crash-Cymbal")
        {
            this.imagesrc = "../assets/drum_imgs/Crash-Cymbal.jpg"
            this.soundsrc = "../assets/Crash-Cymbal.wav";
        }
        else if(type == "Hat")
        {
            this.imagesrc = "../assets/drum_imgs/High-Hat.jpg"
            this.soundsrc = "../assets/Hi-Hat.wav";
        }
        else if(type == "Ride")
        {
            this.imagesrc = "../assets/drum_imgs/Ride-Cymbal.jpg"
            this.soundsrc = "../assets/Ride-Cymbal.wav";
        }
        else if(type == "Clap")
        {
            this.imagesrc = "../assets/drum_imgs/Clap.jpg"
            this.soundsrc = "../assets/Clap.wav";
        }
        else if(type == "Stick"){
            this.imagesrc = "../assets/drum_imgs/Sticks.jpg"
            this.soundsrc = "../assets/Cross-Sticks.wav";
        }
        else{
            this.imagesrc = "../assets/drum_imgs/blank.jpg"
            this.soundsrc = "";
        }
	}

	play(){
        let audio = new Audio();
        audio.src = this.soundsrc;
        audio.load();
        audio.play();
    }

	
}
