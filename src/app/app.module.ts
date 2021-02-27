import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    AdministrateurLoginFormComponent,
    AdministrateurCreationAdminFormComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
