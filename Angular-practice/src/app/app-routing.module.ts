import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/pageNotFoundComponent';
import { AddressComponent } from './routing/addressComponent';
import { HeaderComponent } from './routing/header/header.component';

const routes: Routes =  [
                        {path:'About',  component: AboutComponent,title:'About'},
                        {path:'Home',  component: HomeComponent,title:'Home'},
                        {path:"Address", component:AddressComponent,title:'Address'},
                        {path:'', redirectTo:'Home',pathMatch:'full'},
                        // {path:'', component: HomeComponent},
                        {path:'**',  component:PageNotFoundComponent,title:'PageNotFound'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
