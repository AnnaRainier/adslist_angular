import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ad } from '../models/Ad';
import { AdsService } from '../ads.service';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../../app-common/users.service';
import { User } from '../models/User';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  @Input() user: User
  list$: Observable<Ad[]>
  subscription: Subscription
  p: number = 1;
  
  constructor(private adsServise: AdsService, private usersService: UsersService, 
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.checkIfDataMockSet();
    this.list$ = this.getList();
  }

  getList(){
    this.list$ = this.adsServise.list();
    return this.list$;
  }

  deleteAdItem(item) {
   this.list$ = this.adsServise.deleteAdItem(item);
   this.router.navigate(['/delete/', 'item.id'], {relativeTo: this.route});
   console.log(this.list$);
  }


  checkIfDataMockSet() {
    let list = Object.create(this.adsServise.list());
    console.log(list);
    if (list.value == null) {
      console.log(list);
      this.adsServise.mock();
    }
  }

}
