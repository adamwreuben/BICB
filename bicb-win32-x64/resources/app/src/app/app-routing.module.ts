import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';


const routes: Routes = [
  {path: 'dynamic-chart', component:DynamicChartComponent},
  {path: '**', component:DynamicChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
