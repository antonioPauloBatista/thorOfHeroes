import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {

  constructor(public messagerService: MessagesService) {

  }
}
