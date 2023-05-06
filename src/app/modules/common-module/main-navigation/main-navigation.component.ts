import { Component } from '@angular/core';
import menus from '../../../../assets/json/menu-items.json';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent {
  menuMap: any;
  menuItems: String[];

  constructor() {
    this.menuMap = new Map(Object.entries(menus.menuItems));
    this.menuItems = Array.from(this.menuMap.keys());
  }
}
