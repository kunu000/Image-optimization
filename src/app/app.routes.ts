import { Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

export const routes: Routes = [
  { redirectTo: 'c1', pathMatch: 'full', path: '' },
  { path: 'c1', component: Component1Component },
  { path: 'c2', component: Component2Component },
];
