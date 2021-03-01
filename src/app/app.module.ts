import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { CardComponent } from './features/formations/card/card.component';
import { ListeComponent } from './features/formations/liste/liste.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageFormationByIdComponent } from './pages/page-formation-by-id/page-formation-by-id.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { ListeDesThemesComponent } from './features/themes/liste-des-themes/liste-des-themes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ListeComponent,
    PageFormationListeComponent,
   
    PageFormationByIdComponent,
   
    FormationByIdComponent,
   
    ListeDesThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
