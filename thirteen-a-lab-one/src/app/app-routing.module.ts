import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FiltersComponent } from './filters/filters.component';


const routes: Routes = [
  { path: '',       component: FiltersComponent},
  {path: '**', redirectTo:'PageNotFoundComponent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
