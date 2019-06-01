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
      let img = document.getElementById("areaimg");
          img.style.height = "80%";
          img.style.right = "-40px";
    }
  }

  
  


  

}
