import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../services/player-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players;

  //inyeccion de servicio en costructor
  constructor(private service:PlayerServiceService) { 
   this.players=service.getAllPlayers();
  }

  

  ngOnInit(): void {
    
  }

}
