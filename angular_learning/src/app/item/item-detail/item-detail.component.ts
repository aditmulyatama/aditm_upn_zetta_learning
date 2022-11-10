import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  providers: [ItemService],
})
export class ItemDetailComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) {}
  itemId: any;
  itemInfo: any;
  harga: string = '';
  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemInfo = this.itemService.itemList.find((x) => x.id == this.itemId);
    console.log(this.itemId);
    console.log(this.itemInfo);
    this.harga = this.itemService.displayHarga(this.itemId - 1);
  }
}
