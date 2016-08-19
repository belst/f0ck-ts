import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import './rxjs-operators';

@Injectable()
export class F0ckService {

  items: Item[] = [];

  constructor(private http: Http, private router: Router) { }

  getItems(page = 1): Observable<Item[]> {
    // dont cache that shit cba
    return this.http.get('/api/all/' + page)
      .map(res => res.json());
  }

  getItem(id: number | string = 'random'): Observable<Item> {
    let item = this.items.find(x => x.id === id);
    if(item) return Observable.create(obs => {
      obs.onNext(item);
      obs.onCompleted();
    });

    let obs = this.http.get('/api/' + id).map(res => res.json());
    obs.subscribe(res => {
      if(this.items.find(x => x.id === res.id)) return;
      this.items.push(res);
    });

    return obs;
  }

}
