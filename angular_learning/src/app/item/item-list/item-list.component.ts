import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  items: {
    id: number;
    gambar: string;
    nama: string;
    harga: number;
    kondisi: string;
    link_pembelian: string;
  }[] = this.itemService.itemList;
  getColor(kondisi: string) {
    if (kondisi === 'Sempurna') {
      return 'green';
    } else if (kondisi === 'Baik') {
      return 'greenyellow';
    } else {
      return 'red';
    }
  }
  displayHarga(index: number) {
    return this.itemService.formatter.format(this.items[index].harga);
  }

  ngOnInit(): void {}
}
