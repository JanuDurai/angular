import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/pageNotFoundComponent';
import { AddressComponent } from './routing/addressComponent';
import { CanActiveGuard } from './admin/can-active.guard';

const routes: Routes =  [
                        {path:'About',  component: AboutComponent,title:'About', canActivate:[CanActiveGuard]},
                        {path:'Home',  component: HomeComponent,title:'Home'},
                        {path:"Address", component:AddressComponent,title:'Address'},
                        {path:'Admin', loadChildren: ()=> import('./admin/admin.module') .then(m=> m.AdminModule),canActivateChild:[CanActiveGuard]},
                        // {path:'Home/:id',  component: HomeComponent,title:'Home'}, //PathMatch
                        // {path:'', redirectTo:'Home/:id',pathMatch:'full'},
                        {path:'', redirectTo:'Home',pathMatch:'full'},
                        // {path:'', component: HomeComponent},
                        {path:'**',  component:PageNotFoundComponent,title:'PageNotFound'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
