import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';

const routes: Routes = [{path:"Home", component:HomeComponent},
{path:"Login", component:LoginComponent},
{path:"Register", component:RegisterComponent},
{path:"Profile",component:ProfileComponent},
{path:'', redirectTo:'Login', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
