import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import menus from '../../../../assets/json/menu-items.json';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.css'],
})
export class SubNavigationComponent implements OnInit {
  menuMap: any;
  menuItems: String[] = [];
  currentMenu: any = '';

  constructor(private route: ActivatedRoute) {
    this.menuMap = new Map(Object.entries(menus.menuItems));
  }

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      if (url[0].path) {
        this.currentMenu = url[0].path;
      } else {
        this.currentMenu = 'Main';
      }
      this.menuItems = this.menuMap.get(this.currentMenu).children;
      console.log(this.menuItems);
    });
  }
}
