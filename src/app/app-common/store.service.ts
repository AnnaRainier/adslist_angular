import { Injectable } from '@angular/core';
import { LocalStorageStoreService } from './local-storage-store.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Ad } from '../ads/models/Ad';

@Injectable()
export class StoreService {

  constructor(private localStorageStore: LocalStorageStoreService) { }

  getList(resource: string): Observable<any[]> {
    const list = this.localStorageStore.getList(resource);
    return of(list);
  }

  setMock() {
    return of(this.localStorageStore.setMock());
  }

}
