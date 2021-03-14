import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministrateursListComponent } from './features/administrateurs-list/administrateurs-list.component';
import { AjoutAdministrateurFormComponent } from './features/ajout-administrateur-form/ajout-administrateur-form.component';
import { AjoutFormationFormComponent } from './features/ajout-formation-form/ajout-formation-form.component';
<<<<<<< HEAD
import { FormationsListComponent } from './features/formations-list/formations-list.component';
import { CardComponent } from './features/formations/card/card.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { ContactComponent } from './pages/contact/contact.component';
=======
import { DashboardHomeComponent } from './features/dashboard-home/dashboard-home.component';
import { AjoutSessionFormComponent } from './features/sessions/ajout-session-form/ajout-session-form.component';
import { ListSessionsDashboardComponent } from './features/sessions/list-sessions-dashboard/list-sessions-dashboard.component';
>>>>>>> fatima
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NosCentresComponent } from './pages/nos-centres/nos-centres.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
<<<<<<< HEAD
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { UpdateFormationComponent } from './pages/update-formation/update-formation.component';

const routes: Routes = [
  // {path: "search/:keyword", component:PageFormationListeComponent},
  {path:"", component:AppComponent},
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationComponent},
  {path:"location", component:NosCentresComponent},
  {path:"contact", component:ContactComponent},
=======

const routes: Routes = [
  // {path: "search/:keyword", component:PageFormationListeComponent},
>>>>>>> fatima
  {path:"login", component:LoginComponent},
  {path:"dashboard/:id", component:DashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component:DashboardHomeComponent},
      {path: "ajoutSession", component:AjoutSessionFormComponent}, 
      {path: "listeSessions", component:ListSessionsDashboardComponent},
      {path: "ajoutFormation",component:AjoutFormationFormComponent},
<<<<<<< HEAD
      {path: "modifierFormation", component:UpdateFormationComponent},
      {path: "formations", component:FormationsListComponent},
=======
>>>>>>> fatima
      {path: "admin-creation", component:AjoutAdministrateurFormComponent},
      {path: "administrateurs", component:AdministrateursListComponent}
  ]},
  {path:'', component:AppComponent},
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationByIdComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
