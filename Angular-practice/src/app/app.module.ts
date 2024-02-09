import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HookMethodsComponent } from './hook-methods/hook-methods.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { EmulatedComponent } from './encapsulation/emulated/emulated.component';
import { NoneComponent } from './encapsulation/none/none.component';
import { EncapComponent } from './encapsulation/encap/encap.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ParentComponentComponent } from './interaction/parent-component/parent-component.component';
import { SiblingComponentComponent } from './interaction/sibling-component/sibling-component.component';
import { ChildComponentComponent } from './interaction/parent-component/child-component/child-component.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { MultipleSlotComponent } from './content-projection/multiple-slot/multiple-slot.component';
import { ConditionalProjectionComponent } from './content-projection/conditional-projection/conditional-projection.component';
import { TemplateComponent } from './template/template.component';

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
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
