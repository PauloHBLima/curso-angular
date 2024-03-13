import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { ParentDataSecondComponent } from './components/parent-data-second/parent-data-second.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventostwoComponent } from './components/eventostwo/eventostwo.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { NumberParComponent } from './components/number-par/number-par.component';
import { ChangeNumberParComponent } from './components/change-number-par/change-number-par.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    ParentDataSecondComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EventostwoComponent,
    EmitterComponent,
    ChangeNumberComponent,
    NumberParComponent,
    ChangeNumberParComponent,
    ListRenderComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
