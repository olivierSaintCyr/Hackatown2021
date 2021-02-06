import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card";
import { CardRessourceManagerComponent } from '../card-ressource-manager/card-ressource-manager.component';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  cardsManager:CardRessourceManagerComponent

  constructor() { }

  ngOnInit(): void {
    
  }
}
