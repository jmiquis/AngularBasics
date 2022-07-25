import { Injectable } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor() { }

  //ejemplo de obtención de datos hardcodeada

  getAllPlayers(){
    return[
      {player_name:'Cristiano Ronaldo',player_age:36},
      {player_name:'Messi',player_age:35}
    ];
  }
}
