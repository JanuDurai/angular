import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component';
import { ProfileComponent } from './Profile/profile.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [{path:"home", component:HomeComponent},
{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"profile",component:ProfileComponent},
{path:'', redirectTo:'login', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
