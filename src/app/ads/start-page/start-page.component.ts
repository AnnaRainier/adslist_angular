import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../app-common/users.service';
import { User } from '../models/User';
import { Subscription } from 'rxjs/Subscription';
//import { Router, ActivatedRoute } from '@angular/router';
import { AdsService } from '../ads.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {
  users: User[]
  currentUser$: User
  @Output() login = new EventEmitter<User>()
  subscription: Subscription
  constructor(private usersService: UsersService, private adsService: AdsService) { }

  ngOnInit() {
    //this.usersService.mockUsers();
    this.checkForMockUsers();
    this.subscription = this.usersService.getUsers().subscribe((value: any) => {
      this.users = value;
  }); 
  
  this.checkIfDataMockSet().subscribe((user) => {
    this.currentUser$ = user;
  });
  
  this.currentUser$ = this.usersService.getAuthorized();
  console.log('init happens');
  
}

  checkForMockUsers() {
    let list = Object.create(this.usersService.getUsers());
    list = list.value;
    //console.log(list.length);
    if (list == null || list.length < 1) this.usersService.mockUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loginSubmit() {
    let name = this.currentUser$.name;
    console.log(name);
    let password = this.currentUser$.password;
    if (name && password) {
    this.currentUser$.id = this.usersService.checkUser(name, password);
    if(this.currentUser$.id !== null) {
      this.usersService.setUserAuthorized(this.currentUser$);
    } else console.log('not authorized');
    } else alert('name and password can\'t be blank!');
  }

  logOut() {
    this.usersService.setUserAuthorized({});
    this.currentUser$ = this.usersService.getAuthorized();
  }

  checkIfDataMockSet() {
    let user = this.usersService.getAuthorized();
    console.log(user);
    if (!user || !user.hasOwnProperty('id')) {
      this.usersService.setUserAuthorized(new User);
      console.log('empty user set');
    }
    return of(user);
 
  }

}
