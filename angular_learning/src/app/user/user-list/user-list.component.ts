import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  detail: boolean[] = [];
  userlist: any[] = [];
  ngOnInit(): void {
    this.userlist = this.dataService.data;
    this.detail = this.dataService.detail;
  }
  onDetail(index: number) {
    this.detail[index] = !this.detail[index];
  }

  edit(param: number) {
    this.router.navigate(['users/user-edit/' + param]);
    // console.log(param);
  }
}
