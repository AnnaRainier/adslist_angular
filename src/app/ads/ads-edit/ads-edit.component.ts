import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Ad } from '../models/Ad';
import { AdsService } from '../ads.service';
import { User } from '../models/User';
import { UsersService } from '../../app-common/users.service';

@Component({
  selector: 'app-ads-edit',
  templateUrl: './ads-edit.component.html',
  styleUrls: ['./ads-edit.component.css']
})
export class AdsEditComponent implements OnInit {
  ad: Ad
  user: User
  adId: number
  constructor(private adsService: AdsService,
    private usersService: UsersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id');
      if (this.checkForEdit(this.router.url)) {
        this.adId = id;
      } else this.adId = null;
      return this.adsService.getById(id);
    })
    .subscribe((ad: Ad) => 
  this.ad = ad
);

  this.user = this.usersService.getAuthorized();
  console.log(this.user);
  }

  checkForEdit(link) {
    let str = link;
    let pattern = '\/edit';
    return (link.match(pattern) != null);
  }

}
