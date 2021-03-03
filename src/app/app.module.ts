import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministrateurLoginFormComponent } from './features/administrateur-login-form/administrateur-login-form.component';
import { AdministrateurCreationAdminFormComponent } from './features/administrateur-creation-admin-form/administrateur-creation-admin-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { NavigationDashboardComponent } from './commons/navigation-dashboard/navigation-dashboard.component';
import { CardComponent } from './features/formations/card/card.component';
import { ListeComponent } from './features/formations/liste/liste.component';
import { PageFormationListeComponent } from './pages/page-formation-liste/page-formation-liste.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjoutFormationFormComponent } from'./features/ajout-formation-form/ajout-formation-form.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { PageFormationByIdComponent } from './pages/page-formation-by-id/page-formation-by-id.component';
import { FormationByIdComponent } from './features/formations/formation-by-id/formation-by-id.component';
import { ListeDesThemesComponent } from './features/themes/liste-des-themes/liste-des-themes.component';
import { SearchBarComponent } from './features/search-bar/search-bar.component';
import { UpdateFormationComponent } from './pages/update-formation/update-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministrateurLoginFormComponent,
    AdministrateurCreationAdminFormComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ListeComponent,
    PageFormationListeComponent, 
    PageFormationByIdComponent,  
    FormationByIdComponent,   
    ListeDesThemesComponent,
    NavigationDashboardComponent,
    AjoutFormationFormComponent,
    SearchBarComponent,
    UpdateFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
