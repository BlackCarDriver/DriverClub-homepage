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
    
    var already = 2;
    $("#foot").mouseenter(function(){
      if(already !=2 ) return;
      $(this).animate({height:'100px'},1000,function(){already=1;}
      );
    });

    $("#foot").mouseleave(function(){
      if(already !=1 ) return;
      $(this).animate({height:'15px'},1000,function(){already=2;});
    });
  }

  
  


  

}
