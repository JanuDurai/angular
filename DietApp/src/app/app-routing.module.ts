import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [{path:"Home", component:HomeComponent},
{path:"Login", component:LoginComponent},
{path:"Register", component:RegisterComponent},
{path:"Profile",component:ProfileComponent},
{path:'', redirectTo:'Home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
