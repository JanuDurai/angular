import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalProjectionComponent } from './content-projection/conditional-projection/conditional-projection.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MultipleSlotComponent } from './content-projection/multiple-slot/multiple-slot.component';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { CustompipePipe } from './custompipe.pipe';
import { DirectiveComponent } from './directives/directive/directive.component';
import { EmulatedComponent } from './encapsulation/emulated/emulated.component';
import { EncapComponent } from './encapsulation/encap/encap.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { NoneComponent } from './encapsulation/none/none.component';
import { HookMethodsComponent } from './hook-methods/hook-methods.component';
import { ImgUrlPipe } from './img-url.pipe';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponentComponent } from './interaction/parent-component/child-component/child-component.component';
import { ParentComponentComponent } from './interaction/parent-component/parent-component.component';
import { SiblingComponentComponent } from './interaction/sibling-component/sibling-component.component';
import { TemplateComponent } from './template/template.component';
import { DataTableComponent } from './data-table/data-table.component';

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
    SiblingComponentComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DatePipe,
    CurrencyPipe,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
