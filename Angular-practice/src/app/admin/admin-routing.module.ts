import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CanActiveGuard } from './can-active.guard';

const routes: Routes = [{path:'', component: AdminComponent,title:'Admin', canLoad: [CanActiveGuard]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
