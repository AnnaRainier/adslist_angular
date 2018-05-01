import { Injectable } from '@angular/core';
import { Ad } from '../ads/models/Ad';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LocalStorageStoreService {
  constructor() { }

  setMock() {
    localStorage.setItem('ads', JSON.stringify([
        {
          "id": 1,
          "userId": 7654321,
          "title": "car rental",
          "description": "lorem ipsum blabla1",
          "authorName": "Adam",
          "createdAt": "4/27/2018"
        },
        {
          "id": 2,
          "userId": 7654321,
          "title": "apartment for sale",
          "description": "lorem ipsum blabla2",
          "authorName": "Adam",
          "createdAt": "4/27/2018"
        }
      ]
    ))
  }

  setUsersMock() {
    localStorage.setItem('users', JSON.stringify([
      {
        "id": 7654321,
        "name": "Adam",
        "password": '123456'
      }
    ]))
  }

  resetUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  resetAds(ads): Observable<Ad[]> {
    localStorage.setItem('ads', JSON.stringify(ads));
    return of(this.getList('ads'));

  }

  getList(collectionName: string) {
    const collection = this.getCollection(collectionName);
    return collection;
  }

  getCollection(collectionName: string) {
    const collectionString = localStorage.getItem(collectionName || '{}')
    return JSON.parse(collectionString);
  }

  createUser(collectionName: string, id: number, name: string, password: any) {
    const user = {
      "id": id,
      "name": name,
      "password": password
    };
    const collection = this.getCollection(collectionName);
    collection.push(user);
    this.resetUsers(collection);
  }

  userAuthorized(user) {
    if (user.id !== null) {
    localStorage.setItem('userAuthorized', JSON.stringify([user]));
    return of(this.getList('userAuthorized'));
    } else return of({});
  }

}
