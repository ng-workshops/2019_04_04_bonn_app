import { Component, ViewChild } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  user = {
    id: 1,
    name: 'Chuck Norris',
    showSecret: false,
    hobbies: ['eat', 'sleep', 'drink']
  };

  message = 'INIT';
  name = 'START_';
  reply = '';

  @ViewChild('child')
  private child: InfoBoxComponent;

  constructor(private messageService: MessageService) {}

  changeChild() {
    this.message = new Date().toISOString();
    this.name += 'X';
  }

  processReply(event) {
    this.reply = event;
  }

  processReplyFromCode() {
    this.child.reply('Send from parent via CODE');
  }

  sendMessage() {
    this.messageService.sendMessage('Send from parent via service');
  }

  callMe(phone: string) {
    alert(phone);
  }
}
