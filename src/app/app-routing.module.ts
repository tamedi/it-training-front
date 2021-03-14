

import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministrateursListComponent } from './features/administrateurs-list/administrateurs-list.component';
import { AjoutAdministrateurFormComponent } from './features/ajout-administrateur-form/ajout-administrateur-form.component';
import { AjoutFormationFormComponent } from './features/ajout-formation-form/ajout-formation-form.component';
import { FormationsListComponent } from './features/formations-list/formations-list.component';
import { CardComponent } from './features/formations/card/card.component';

import { BouttonComponent } from './features/tests/boutton/boutton.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageAuthentificationApprenantComponent } from './pages/page-authentification-apprenant/page-authentification-apprenant.component';
import { PageCompteApprenantComponent } from './pages/page-compte-apprenant/page-compte-apprenant.component';

import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import { PageFormulaireInscriptionApprenantComponent } from './pages/page-formulaire-inscription-apprenant/page-formulaire-inscription-apprenant.component';
import { ContactComponent } from './pages/contact/contact.component';


import { NosCentresComponent } from './pages/nos-centres/nos-centres.component';

import { PageFormationComponent } from './pages/page-formation/page-formation.component';


const routes: Routes = [
  // {path: "search/:keyword", component:PageFormationListeComponent},
  {path:"", component:AppComponent},
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationComponent},
  {path:"location", component:NosCentresComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"apprenant",component:PageFormulaireInscriptionApprenantComponent},
  {path:"apprenant/:id",component:PageCompteApprenantComponent},
  {path:"authentification",component:PageAuthentificationApprenantComponent},
  {path:"boutton", component:BouttonComponent},
  {path:"dashboard", component:DashboardComponent,
    children: [
      {path: "ajoutFormation",component:AjoutFormationFormComponent},
     
      {path: "formations", component:FormationsListComponent},
      {path: "admin-creation", component:AjoutAdministrateurFormComponent},
      {path: "administrateurs", component:AdministrateursListComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
