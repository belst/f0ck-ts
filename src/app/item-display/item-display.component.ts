import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'item-display',
  templateUrl: 'item-display.component.html',
  styleUrls: ['item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

  _item: Item;
  _type: string = '';

  constructor() { }

  @Input() set item(item: Item) {
    this._item = item;
    this._type = item.mime.split('/')[0];
  }

  ngOnInit() {
  }

}
