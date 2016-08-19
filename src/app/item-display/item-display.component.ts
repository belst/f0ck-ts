import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'item-display',
  templateUrl: 'item-display.component.html',
  styleUrls: ['item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

  @Input() item: Item;
  type: string = '';

  constructor() { }

  ngOnInit() {
    if(this.item.dest.search(/^.*\.(:?png|gif|bmp|jpg|jpeg|webp)$/im) >= 0)
      this.type = 'img';
    if(this.item.dest.search(/^.*\.(:?mp3|wav|ogg)$/im) >= 0)
      this.type = 'audio';
    if(this.item.dest.search(/^.*\.(:?webm|mp4)$/im) >= 0)
      this.type = 'video';
  }

}
