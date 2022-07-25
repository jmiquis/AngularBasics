import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talkTitle:string;
  talkVariousSubtitles:string[];
  random:number;
  
 

  constructor() {
  
    this.talkTitle='These are the talks';

    this.talkVariousSubtitles=[
      'we are testing',
      'the arrays usage',
      'in angular'
    ];
    this.random = Math.floor((Math.random() * 100) + 1);
    
    

   }

  getColor():string{
    let colors=["red","blue","purple","yellow"];
    let randomNumber:number = Math.floor(Math.random() * (3 + 1));
    return colors[randomNumber];
  }

  getStyleObject(){
    return{
      'color':this.getColor()
    }
  }


  //ejemplo de event biding
  onClickMethod($event:Event){
    ($event.target as HTMLInputElement).innerHTML='esto pasa al clickar';
  }


  //como sacar los datos del evento cuando el evento es de teclado
  onKeyUpMethod($event:Event):void {
    let event   = ($event.target as HTMLInputElement);
    event.value = ($event as KeyboardEvent).code;
  }

  //Este método es el que trae los elementos del hijo 
  addItem(newReview: string) {
    this.talkVariousSubtitles.push(newReview);
  }

  ngOnInit(): void {
  }

}
