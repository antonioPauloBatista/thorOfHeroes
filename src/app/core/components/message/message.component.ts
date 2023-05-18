import { Component } from '@angular/core';
import { MessagesService } from '../../service/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(public messagerService: MessagesService) {

  }
}
