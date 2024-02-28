import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { NavBarComponent } from './components/nav-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[HeaderComponent,FooterComponent,NavBarComponent]
})
export class SharedModule { }
