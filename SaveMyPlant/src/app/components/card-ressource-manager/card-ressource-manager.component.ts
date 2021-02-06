import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card"
import { CardRessourceComponent } from "../card-ressource/card-ressource.component"

@Component({
  selector: 'app-card-ressource-manager',
  templateUrl: './card-ressource-manager.component.html',
  styleUrls: ['./card-ressource-manager.component.css']
})
export class CardRessourceManagerComponent implements OnInit {
  cards:Array<Card>;
  constructor() { }

  ngOnInit(): void {

  }

}
