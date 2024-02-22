import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DummyComponent } from './admin/dummy/dummy.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    DummyComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
