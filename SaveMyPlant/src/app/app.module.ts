import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MenuComponent } from './components/menu/menu.component';
import { LoadingComponent } from './components/upload-images/upload-images.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CardRessourceComponent } from './components/card-ressource/card-ressource.component';
import { CardRessourceManagerComponent } from './components/card-ressource-manager/card-ressource-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoadingComponent,
    RessourcesComponent,
    AboutusComponent,
    CardRessourceComponent,
    CardRessourceManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
