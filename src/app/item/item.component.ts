import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { F0ckService } from '../f0ck.service';
import { Item } from '../item';
import { ItemDisplayComponent } from '../item-display';
import { BytesPipe } from '../bytes.pipe';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss'],
  directives: [ItemDisplayComponent],
  pipes: [BytesPipe]
})
export class ItemComponent implements OnInit {

  private sub: Subscription;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private f0ck: F0ckService
    ) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress($event) {
    switch($event.key) {
      case 'ArrowLeft':
      case 'a':
        if(this.item.next)
          this.router.navigate(['/', this.item.next]);
        break;
      case 'r':
        this.router.navigate(['/', 'random']);
        break;
      case 'ArrowRight':
      case 'd':
        if(this.item.prev)
          this.router.navigate(['/', this.item.prev]);
        break;
    }
  }
  
  ngOnInit() {
    if(this.item) return;

    this.sub = this.route.params.subscribe(params => {
      this.f0ck.getItem(params['id']).subscribe(res => {
        if(params['id'] === 'random') {
          this.router.navigate(['/', res.id]);
          return;
        }
        this.item = res;
      });
    });
  }

}
