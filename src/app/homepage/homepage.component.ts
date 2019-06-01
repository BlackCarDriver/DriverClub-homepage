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
    
  }

  show(){
    let footer = document.getElementById('foot');
    footer.style.height="100px";
  }
  hide(){
    let footer = document.getElementById('foot');
    footer.style.height="30px";
  }


}
