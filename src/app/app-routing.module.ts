import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministrateursListComponent } from './features/administrateurs-list/administrateurs-list.component';
import { AjoutAdministrateurFormComponent } from './features/ajout-administrateur-form/ajout-administrateur-form.component';
import { AjoutFormationFormComponent } from './features/ajout-formation-form/ajout-formation-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardHomeComponent } from './features/dashboard-home/dashboard-home.component';
import { AjoutSessionFormComponent } from './features/sessions/ajout-session-form/ajout-session-form.component';
import { ListSessionsDashboardComponent } from './features/sessions/list-sessions-dashboard/list-sessions-dashboard.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NosCentresComponent } from './pages/nos-centres/nos-centres.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';



const routes: Routes = [
  // {path: "search/:keyword", component:PageFormationListeComponent},
  {path:"", component:AppComponent},
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationComponent},
  {path:"location", component:NosCentresComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard/:id", component:DashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component:DashboardHomeComponent},
      {path: "ajoutSession", component:AjoutSessionFormComponent}, 
      {path: "listeSessions", component:ListSessionsDashboardComponent},
      {path: "ajoutFormation",component:AjoutFormationFormComponent},
      {path: "admin-creation", component:AjoutAdministrateurFormComponent},
      {path: "administrateurs", component:AdministrateursListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
