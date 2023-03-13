import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { SampleProjectComponent } from './sample-project/sample-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfElseComponent,
    SampleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
