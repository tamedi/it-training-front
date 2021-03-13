import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministrateursListComponent } from './features/administrateurs-list/administrateurs-list.component';
import { AjoutAdministrateurFormComponent } from './features/ajout-administrateur-form/ajout-administrateur-form.component';
import { AjoutFormationFormComponent } from './features/ajout-formation-form/ajout-formation-form.component';
import { DashboardHomeComponent } from './features/dashboard-home/dashboard-home.component';
import { CardComponent } from './features/formations/card/card.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { AjoutSessionFormComponent } from './features/sessions/ajout-session-form/ajout-session-form.component';
import { ListSessionsDashboardComponent } from './features/sessions/list-sessions-dashboard/list-sessions-dashboard.component';
import { ListSessionsComponent } from './features/sessions/list-sessions/list-sessions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageFormationByIdComponent } from './pages/page-formation-by-id/page-formation-by-id.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import { UpdateFormationComponent } from './pages/update-formation/update-formation.component';

const routes: Routes = [
  // {path: "search/:keyword", component:PageFormationListeComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component:DashboardHomeComponent},
      {path: "ajoutSession", component:AjoutSessionFormComponent}, 
      {path: "listeSessions", component:ListSessionsDashboardComponent},
      {path: "ajoutFormation",component:AjoutFormationFormComponent},
      {path: "modifierFormation", component:UpdateFormationComponent},
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
