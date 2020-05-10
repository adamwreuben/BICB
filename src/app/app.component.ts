import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bicb';
  tiles: Tile[] = [
    {
      cols: 3, rows: 1, color: 'red', content:`
      
      `},
    { cols: 1, rows: 2, color: 'red', content:``},
    { cols: 1, rows: 1, color: 'red', content:``},
    {cols: 2, rows: 1, color:'red', content:``}
  ];
  

}
