import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
  
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-service-desk',
  templateUrl: './service-desk.component.html',
  styleUrls: ['./service-desk.component.css']
})
export class ServiceDeskComponent implements OnInit {
  foods: Food[] = [
    { value: 'new-c', viewValue: 'New Client' },
    { value: 'repeating-c', viewValue: 'Repeating Client' },
    { value: 'special-c', viewValue: 'Special Client' }
  ];
  
  activeClients: Section[] = [
    {
      name: 'Lauti A. Njeza',
      updated: new Date('3/20/20'),
    },
    {
      name: 'Dorah Joshua Kabigi',
      updated: new Date('3/17/20'),
    },
    {
      name: 'Monika Juma Kyando',
      updated: new Date('4/3/20'),
    },
    {
      name: 'Rose Wilson Mgonela',
      updated: new Date('5/7/20'),
    }
  ];
  inactivesClients: Section[] = [
    {
      name: 'Tussa Molis Langila',
      updated: new Date('11/25/19'),
    },
    {
      name: 'Lydia Daniel Mwambosa',
      updated: new Date('12/3/19'),
    },
    {
      name: 'Naomi Fredy Mbembela',
      updated: new Date('1/19/20'),
    }
  ];
  
  defaultsClients: Section[] = [
    {
      name: 'Sarafina Emmanuel Mwakajila',
      updated: new Date('4/9/20'),
    },
    {
      name: 'Witness Joseph Mkembo',
      updated: new Date('4/9/20'),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
