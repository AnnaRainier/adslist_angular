import { Injectable } from '@angular/core';
import { StoreService } from '../app-common/store.service';
import { Observable } from 'rxjs/Observable';
import { Ad } from './models/Ad'
import { of } from 'rxjs/observable/of';
import { LocalStorageStoreService } from '../app-common/local-storage-store.service';

@Injectable()
export class AdsService {

  constructor(private store: StoreService, private localStorageStore: LocalStorageStoreService) { }

  list() {
    const list = this.localStorageStore.getList('ads') 
      return of(list);
  }

  mock() {
    return of(this.localStorageStore.setMock());
  }

 deleteAdItem(item): Observable<Ad[]> {
   let list = this.localStorageStore.getList('ads');
   let index;
   console.log(list);
   
   for (let i = 0; i< list.length; i++) {
     if(list[i].id == item.id) index = i;
   }
   list.splice(index, 1);
   //console.log(item);
   /*
   list.map((ad, index) => {
    if (ad.id == item.id) {
      list.splice(index, 1);
    }

    
   })
     */ 
   return this.localStorageStore.resetAds(list);
  }

  getById(id) {
    let list = this.localStorageStore.getList('ads');
    let result;
    list.map((ad) => {
      if ( ad.id == id) result = ad;
    })
    return of(result);
  }

  createNewAd(item, ad?) {
    let list = this.localStorageStore.getList('ads');
    if (ad) {
        if (ad.description && ad.title) {
          item.id = ad.id;
        item.title = ad.title;
        item.description = ad.description;
        item.userId = ad.userId;
        item.authorName = ad.authorName;

          for (let i = 0; i< list.length; i++) {
            if(list[i].id == item.id) list.splice(i, 1);
          }
        if (list[list.length-1] !=undefined) {
          item.id = list[list.length-1].id + 1;
        } else item.id = 1;
        list.push(item);
        this.localStorageStore.resetAds(list); 
      } else alert ('please fill in data');
    } else {
        if (item.description && item.title) {
          if (list[list.length-1] !=undefined) {
            item.id = list[list.length-1].id + 1;
          } else item.id = 1;
        let user = this.localStorageStore.getList('userAuthorized');
        item.userId = this.localStorageStore.getList('userAuthorized')[0].id;
        item.authorName = this.localStorageStore.getList('userAuthorized')[0].name;
        list.push(item);
        this.localStorageStore.resetAds(list);
      } else alert ('please fill in data');  
    }
  }
}
