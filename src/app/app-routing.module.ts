import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';

const routes: Routes = [
  {path:"formations", component:PageFormationListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
