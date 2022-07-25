import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  //ejemplo de atributo importado con input desde la clase padre
  @Input() talk:string="";


  //ejemplo de exportación de atributo a clase padre
  @Output() talkReview = new EventEmitter<string>();

  fecha:Date;

  jsonObject:Object;

  constructor() { 
    this.fecha = new Date();
    this.jsonObject={nombre:'pedro',apellido:'picapiedra'};
  }

  ngOnInit(): void {
  }

    //este metodo es necesario para exportar el valor del atributo con @output
  addNewTalk(value: string) {
    //el metodo emit es que hace la magia
    this.talkReview.emit(value);
  }

}
