import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_learning';
  itemList = [
    { itemName: 'Item 1', itemStatus: 'Good' },
    { itemName: 'Item 2', itemStatus: 'Broken' },
  ];
  onAddItem(itemData: { item_name: string; item_status: string }) {
    this.itemList.push({
      itemName: itemData.item_name,
      itemStatus: itemData.item_status,
    });
  }
}
