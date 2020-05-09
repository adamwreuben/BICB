import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.css']
})

export class DynamicChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'March', 'April', 'May'];
  public lineChartLabels: Label[] = ['Jan', 'Feb', 'March', 'April', 'May'];
  public barChartType: ChartType = 'line';
  public barChartLegend = false;
  public lineChartLegend = false;
  

  public barChartData: ChartDataSets[] = [
    { data: [61, 62, 62, 52], label: 'Clients' },
    { data: [759 , 1346, 1640, 1148], label: 'G. Profit (K TZS)' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'line' ? 'bar' : 'line';
  }

}
