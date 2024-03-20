import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListAnimeRenderComponent } from './components/list-anime-render/list-anime-render.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'changeNumber', component: ChangeNumberComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'emmiter', component: EmitterComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'ifRender', component: IfRenderComponent },
  { path: 'parentData', component: ParentDataComponent },
  { path: 'twoWay', component: TwoWayBindingComponent },
  { path: 'animes', component: ListAnimeRenderComponent,}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
