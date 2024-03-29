import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './practice/routing/about/about.component';
import { HomeComponent } from './practice/routing/home/home.component';
import { PageNotFoundComponent } from './practice/routing/pageNotFoundComponent';
import { AddressComponent } from './practice/routing/addressComponent';
import { CanActiveGuard } from './practice/admin/can-active.guard';
import { FormNavigateComponent } from './practice/routing/form-navigate/form-navigate.component';
import { canDeactivateGuard } from './practice/admin/can-deactivate.guard';

const routes: Routes = [
  { path: 'About', component: AboutComponent, title: 'About', canActivate: [CanActiveGuard]},
  { path: 'About', title: 'Home', 
     children:[{path:"Home", component: HomeComponent}] },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: "Address", component: AddressComponent, title: 'Address' },
  { path: 'Admin', loadChildren: () => import('./practice/admin/admin.module').then(m => m.AdminModule), canActivateChild: [CanActiveGuard] },
  {path:"Register", component:FormNavigateComponent, canDeactivate:[canDeactivateGuard] },
  // {path:'Home/:id',  component: HomeComponent,title:'Home'}, //PathMatch
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  // {path:'', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent, title: 'PageNotFound' }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
