import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'searchbar',
    loadComponent: () => import('./components/searchbar/searchbar.component').then(m => m.SearchbarComponent),
  },
  {
    path: 'wizard',
    loadComponent: () => import('./components/wizard-form/wizard-form.component').then(m => m.WizardFormComponent),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
