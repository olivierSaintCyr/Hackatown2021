import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MenuComponent } from './components/menu/menu.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { LoadingComponent } from './components/upload-images/upload-images.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'upload',
    component: LoadingComponent
  },
  {
    path: 'ressources',
    component: RessourcesComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
