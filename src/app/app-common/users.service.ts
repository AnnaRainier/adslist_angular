import { Injectable } from '@angular/core';
import { LocalStorageStoreService } from './local-storage-store.service';
import { of } from 'rxjs/observable/of';
import { User } from '../ads/models/User';

@Injectable()
export class UsersService {

  constructor(private localStorageStoreService: LocalStorageStoreService) { }

  mockUsers() {
    return of(this.localStorageStoreService.setUsersMock());
  }

  getUsers() {
    return of(this.localStorageStoreService.getList('users'));
  }

  getAuthorized() {
    if (this.localStorageStoreService.getList('userAuthorized') != null) {
      return this.localStorageStoreService.getList('userAuthorized')[0];
    } else return {};
  }

  checkUser(name: string, password: string) {
    let userId;
    let index;
    let users = this.localStorageStoreService.getList('users');
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].name == name) index = i;
    }
    console.log(index);
    if (index == undefined) {
        userId = Date.now();
        console.log('index was undefined');
        this.localStorageStoreService.createUser('users', userId, name, password);
    } else {
        if (users[index].name === name && users[index].password === password) {
          userId = users[index].id;
        } else if (users[index].name == name && users[index].password != password) {
          alert ('user exists');
          userId = null;
        } else if (users[index].password == password && users[index].name !== name) {
          userId = Date.now();
          console.log('this part worked ' + index);
          this.localStorageStoreService.createUser('users', userId, name, password);
        }
        else {
          userId = Date.now();
          console.log('this part worked ' + index);
          this.localStorageStoreService.createUser('users', userId, name, password);
      }
    }

      
    
      return userId;
    }
  

  setUserAuthorized(user) {
    this.localStorageStoreService.userAuthorized(user);
  }
}
