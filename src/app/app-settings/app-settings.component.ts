import { Component, OnInit } from '@angular/core';
interface Language {
  value: string;
  viewValue: string;
}

interface zone {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  panelOpenState = false;
  
  // languages
  Languages: Language[] = [
    { value: 'Swahili', viewValue: 'Swahili' },
    { value: 'English', viewValue: 'English' },
    { value: 'Spanish', viewValue: 'spanish' }
  ];
  
  // timezones
  Timezones: zone[] = [
    {
      value: 'EAT', viewValue: ` 15: 48,
Tuesday 12 May 2020, East African Time (EAT)`},
    {
      value: 'WAT', viewValue: `14:30
Tuesday, 12 May 2020
West Africa Time (WAT)` },
    { value: 'Spanish', viewValue: 'spanish' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
