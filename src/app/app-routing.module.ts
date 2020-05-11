import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { OperationsComponent } from './operations/operations.component';
import { ServiceDeskComponent } from './service-desk/service-desk.component';
import { TrasuryComponent } from './trasury/trasury.component';


const routes: Routes = [
  { path: 'management', component: ManagementComponent},
  { path: 'operations', component: OperationsComponent},
  { path: 'service-desk', component: ServiceDeskComponent},
  { path: 'treasury', component: TrasuryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ManagementComponent, OperationsComponent, ServiceDeskComponent, TrasuryComponent]