import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    Camera
  ]
})
export class HomePage {
  public img = "";
  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  foto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.img = 'data:image/png;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
