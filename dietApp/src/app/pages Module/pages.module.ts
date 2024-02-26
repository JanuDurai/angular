import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports:[RegisterComponent,LoginComponent]
})
export class PagesModule { }
