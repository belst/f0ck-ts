import { Component, OnInit } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Item } from '../item';
import { F0ckService } from '../f0ck.service';

import '../rxjs-operators';

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.scss'],
  directives: [InfiniteScroll]
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  errorMessage: string;
  private page = 1;

  constructor(private f0ck: F0ckService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.page++;
    this.f0ck.getItems(this.page - 1)
      .subscribe(
        items => {
          if(items.length) {
            this.items = this.items.concat(items);
          } else {
            this.page--;
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  onScrollDown() {
    this.getItems();
  }

}
