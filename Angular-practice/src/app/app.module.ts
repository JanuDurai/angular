import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ConditionalProjectionComponent } from './practice/content-projection/conditional-projection/conditional-projection.component';
import { ContentProjectionComponent } from './practice/content-projection/content-projection.component';
import { MultipleSlotComponent } from './practice/content-projection/multiple-slot/multiple-slot.component';
import { SingleSlotComponent } from './practice/content-projection/single-slot/single-slot.component';
import { CustompipePipe } from './practice/pipes/custompipe.pipe';
import { DirectiveComponent } from './practice/directives/directive/directive.component';
import { EmulatedComponent } from './practice/encapsulation/emulated/emulated.component';
import { EncapComponent } from './practice/encapsulation/encap/encap.component';
import { EncapsulationComponent } from './practice/encapsulation/encapsulation.component';
import { NoneComponent } from './practice/encapsulation/none/none.component';
import { HookMethodsComponent } from './practice/hook-methods/hook-methods.component';
import { ImgUrlPipe } from './practice/pipes/img-url.pipe';
import { InteractionComponent } from './practice/interaction/interaction.component';
import { ChildComponentComponent } from './practice/interaction/parent-component/child-component/child-component.component';
import { ParentComponentComponent } from './practice/interaction/parent-component/parent-component.component';
import { TemplateComponent } from './practice/template/template.component';
import { DataTableComponent } from './practice/data-table/data-table.component';
import { File1Component } from './practice/dependencyinjection/file1/file1.component';
import { File2Component } from './practice/dependencyinjection/file2/file2.component';
import { MaxOfNumService } from './practice/services/max-of-num.service';
import { SubmitButtonService } from './practice/services/submit-button.service';
import { MainComponent } from './routing/main/main.component';
import { HeaderComponent } from './routing/header/header.component';
import { FooterComponent } from './routing/footer/footer.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { PageNotFoundComponent } from './routing/pageNotFoundComponent';
import { AddressComponent } from './routing/addressComponent';
import { AddressLinkComponent } from './routing/addressLinkComponent';

// import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

// const route:Routes=[{path:'About', component: AboutComponent},
//                     {path:'Home', component: HomeComponent}]
//                     imports: [RouterModule.forRoot(route)];

@NgModule({
  declarations: [
    AppComponent,
    HookMethodsComponent,
    EncapsulationComponent,
    EmulatedComponent,
    NoneComponent,
    EncapComponent,
    InteractionComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ContentProjectionComponent,
    SingleSlotComponent,
    MultipleSlotComponent,
    ConditionalProjectionComponent,
    TemplateComponent,
    CustompipePipe,
    ImgUrlPipe,
    DirectiveComponent,
    DataTableComponent,
    File1Component,
    File2Component,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddressComponent,
    AddressLinkComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    DatePipe,
    CurrencyPipe,
    CommonModule,
    // RouterModule,
    AppRoutingModule,

  ],
  providers: [MaxOfNumService,SubmitButtonService],
  bootstrap: [AppComponent]
  
})
export class AppModule { 

}

