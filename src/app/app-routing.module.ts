import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StghubComponent } from './stghub/stghub.component';
const routes: Routes = [
// { path: '', redirectTo: 'hub', pathMatch: 'full' },
  { path: 'hub', component: StghubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
