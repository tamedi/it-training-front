import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AjoutFormationFormComponent } from './features/ajout-formation-form/ajout-formation-form.component';
import { CardComponent } from './features/formations/card/card.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageFormationByIdComponent } from './pages/page-formation-by-id/page-formation-by-id.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationByIdComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent,
    data:{header:false},
    children: [
      {path: "ajoutFormation",component:AjoutFormationFormComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
