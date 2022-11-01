import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss'],
})
export class ItemInputComponent implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';
  @Output('itCreated') itemCreated = new EventEmitter<{
    item_name: string;
    item_status: string;
  }>();
  // itemNameList: any = [];
  // itemStatusList: any = [];
  constructor() {}

  ngOnInit(): void {}

  addItem() {
    // this.itemNameList.push(this.itemName);
    // this.itemStatusList.push(this.itemStatus);
    this.itemCreated.emit({
      item_name: this.newItemName,
      item_status: this.newItemStatus,
    });
    this.newItemName = '';
    this.newItemStatus = '';
  }
}
