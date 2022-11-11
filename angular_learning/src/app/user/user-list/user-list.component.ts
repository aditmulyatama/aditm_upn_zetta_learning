import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dataService: DataService) {}
  detail: boolean[] = [];
  userlist: any[] = [];
  ngOnInit(): void {
    this.userlist = this.dataService.data;
    this.detail = this.dataService.detail;
  }
  onDetail(index: number) {
    this.detail[index] = !this.detail[index];
  }
}
