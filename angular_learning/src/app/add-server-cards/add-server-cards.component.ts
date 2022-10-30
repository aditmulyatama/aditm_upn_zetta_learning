import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server-cards',
  templateUrl: './add-server-cards.component.html',
  styleUrls: ['./add-server-cards.component.scss'],
})
export class AddServerCardsComponent implements OnInit {
  serverName = 'Server0';
  serverList = ['Server 1', 'Server 2'];
  serverStatus = ['online', 'offline'];
  AddServer(input?: any) {
    this.serverName = 'Server ' + (this.serverList.length + 1);
    this.serverStatus.push(Math.random() > 0.5 ? 'online' : 'offline');
    this.serverList.push(this.serverName);
  }
  constructor() {}

  getColor(i: number) {
    return this.serverStatus[i] === 'online' ? 'green' : 'red';
  }
  ngOnInit(): void {}
}
