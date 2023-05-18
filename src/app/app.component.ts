import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List Hero';
  menuItems: MenuItem[] = [
    {
      icon: "dashboard",
      routerLink: "/dashboard",
      toolTiptext: "Dashboard"
    }
  ]
}
