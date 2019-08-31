import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    let width = document.body.clientWidth;
    if(width < 480){
      let imgs = document.getElementsByClassName("areaimg");
      for (let i = 0; i < imgs.length; i++) {
          let img = imgs[i] as HTMLElement;
          img.style.height = "80%";
          img.style.right = "-40px";
      }
    }
}

  
  


  

}
