import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';

const routes: Routes = [
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
