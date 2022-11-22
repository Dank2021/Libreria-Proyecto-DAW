import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutoriaComponent } from './components/add-tutoria/add-tutoria.component';
import { ListTutoriaComponent } from './components/list-tutoria/list-tuoria.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorias', pathMatch: 'full' },
  { path: 'list', component: ListTutoriaComponent },
  { path: 'add', component: AddTutoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
