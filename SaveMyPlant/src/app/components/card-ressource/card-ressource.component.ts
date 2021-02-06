import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../../models/card";

@Component({
  selector: 'card-ressource',
  templateUrl: './card-ressource.component.html',
  styleUrls: ['./card-ressource.component.css']
})
export class CardRessourceComponent implements OnInit {
@Input() card:Card;
  
  constructor() { 
    this.card = new Card();
  }

  ngOnInit(): void {
  }
}
