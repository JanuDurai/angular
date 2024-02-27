import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { SharedModule } from './shared.module';
import { DietModule } from './diet.module';
import { UserService } from './services/user.service';
import { DietService } from './services/diet.service';
import { registerLocaleData } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DietModule,
  ],
  providers: [UserService,DietService],
  bootstrap: [AppComponent],
  exports:[HomeComponent,ProfileComponent,LoginComponent,RegisterComponent]
})
export class AppModule { }
