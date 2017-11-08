import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    username: "",
    name: ""
  }

  constructor() {
  }

  getConfigData():any{
    return localStorage.getItem(config_key_name);
  }

  setConfigData(showSlide?: boolean,name?: string, username?: string){
    let config = {
      showSlide: false,
      username: "",
      name: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name,JSON.stringify(config));
  }

}
