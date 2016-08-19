import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { F0ckService } from '../f0ck.service';

import '../rxjs-operators';

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  errorMessage: string;

  constructor(private f0ck: F0ckService) { }

  ngOnInit() {
    this.getItems(1);
  }

  getItems(page = 1) {
    this.f0ck.getItems(page)
      .subscribe(
        items => this.items = items,
        error => this.errorMessage = <any>error
      );
  }

}
