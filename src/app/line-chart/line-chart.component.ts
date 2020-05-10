import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public barChartType: ChartType = 'line';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: [600, 800, 1_200, 1_800, 1_500], label: 'Target G. Profit(K TZS)' },
    { data: [759, 1_346, 1_640, 1_148], label: 'G. Profit (K TZS)' }
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
}