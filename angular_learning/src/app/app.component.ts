import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService, ItemsService],
})
export class AppComponent implements OnInit {
  title = 'angular_learning';
  itemList: { itemName: string; itemStatus: string }[] = [];
  constructor(
    private itemService: ItemsService,
    private loggingService: LoggingService
  ) {}
  updateStatus(index: number) {
    this.itemService.updateStatus(index);
    this.loggingService.logStatusChange(this.itemList[index].itemStatus);
  }
  changeAllStatus(status: string) {
    this.itemService.changeAllStatus(status);
  }
  ngOnInit(): void {
    this.itemList = this.itemService.itemList;
  }
  destroyItem(index: number) {
    this.itemService.destroyItem(index);
  }
  // onAddItem(itemData: { item_name: string; item_status: string }) {
  //   this.itemList.push({
  //     itemName: itemData.item_name,
  //     itemStatus: itemData.item_status,
  //   });
  // }
  // changeStatus(index: number) {
  //   if (this.itemList[index].itemStatus === 'Perfect') {
  //     this.itemList[index].itemStatus = 'Good';
  //   } else if (this.itemList[index].itemStatus === 'Good') {
  //     this.itemList[index].itemStatus = 'Broken';
  //   } else {
  //     this.itemList[index].itemStatus = 'Perfect';
  //   }
  //   this.loggingService.logStatusChange(this.itemList[index].itemStatus);
  // }
}
