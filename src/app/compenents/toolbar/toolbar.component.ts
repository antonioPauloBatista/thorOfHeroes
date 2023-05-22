import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() title = ''
  @Input() menuItems: MenuItem[] = []
}
