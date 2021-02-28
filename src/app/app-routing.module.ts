import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './features/formations/card/card.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { PageFormationByIdComponent } from './pages/page-formation-by-id/page-formation-by-id.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';

const routes: Routes = [
  {path:"formations", component:PageFormationListeComponent},
  {path:"formations/:id", component:PageFormationByIdComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
