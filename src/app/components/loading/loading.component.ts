import { Component } from '@angular/core';
import { LoadingCoreService } from 'src/app/service/loading-core.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  constructor(public loadService: LoadingCoreService) {

  }
}
