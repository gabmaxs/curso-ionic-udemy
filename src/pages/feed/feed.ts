import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public obj_feed = {
    title:"Titulo Json",
    date:"07/11/2017",
    description:"Texto de descrição. Lorem ipsum...",
    likes:12,
    comments:4,
    time_comment:11
  }

  public name_user:string = "Nome da var";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  protected somaDois(num1:number, num2:number):void {
  	alert(num1+num2);
  }

  ionViewDidLoad() {
  	//this.somaDois(10,60);
    //console.log('ionViewDidLoad FeedPage');
  }

}
