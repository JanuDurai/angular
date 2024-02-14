import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/pageNotFoundComponent';

const routes: Routes =  [
                        //  [{path:'', redirectTo:'/Home',pathMatch:'full'},
                        {path:'About', component: AboutComponent},
                        {path:'Home', component: HomeComponent},
                        {path:'', component: HomeComponent},
                        {path:'**',  component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
