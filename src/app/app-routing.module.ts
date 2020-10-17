import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameDetailComponent } from './name-detail/name-detail.component';

const routes: Routes = [
  { path: 'name-detail/:id', component: NameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [NameDetailComponent];
