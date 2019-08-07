import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-menu-context',
  templateUrl: './input-menu-context.component.html',
  styleUrls: ['./input-menu-context.component.css']
})
export class InputMenuContextComponent implements OnInit {

  names = [
    'Reda Marriott',
    'Cleta Cheatwood',
    'Penney Fortman',
    'Andy Mary',
    'Lilia Ricci',
    'Simonne Horne',
    'Marquis Macgillivray',
    'Ettie Koester',
    'Lovie Mero',
    'Gretta Ripley',
    'Jutta Casteel',
    'Donita Looby',
    'Patrice Guillotte',
    'Kirstin Sever',
    'Ezra Tremper',
    'Darell Monnier',
    'Elvira Balser',
    'Noriko Kluge',
    'Zulema Shake',
    'Kary Schreck'
  ];

  constructor() { }

  ngOnInit() {
  }

  formControlValue = '';

  findChoices(names: any[], searchText: string) {
    return names
      .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
      .slice(0, 5);
  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }

}
