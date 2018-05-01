import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../models/Ad';
import { User } from '../models/User';
import { AdsService } from '../ads.service';
import { UsersService } from '../../app-common/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css']
})
export class AdsFormComponent implements OnInit {
@Input() ad: Ad
@Input() user: User
@Input() adId: number
newAd: Ad
currentDate: string
  constructor(private adsService: AdsService, private usersService: UsersService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.getCurrentDate();
    this.newAd = new Ad;
  }

  deleteAdItem(item) {
    this.adsService.deleteAdItem(item);
   }

   createNewAd (item, ad?) {
     item.createdAt = this.currentDate;
     this.adsService.createNewAd(item, ad);
     this.goToDetailsPage(item.id, ad);
   }

   cancelCreatingAd() {
     this.router.navigate(['../'], {relativeTo: this.route});
   }

   cancelEditingAd() {
     this.router.navigate(['../../'], {relativeTo: this.route});
   }

   getCurrentDate() {
     let now = new Date();
     let year = now.getFullYear().toString();
     let month = now.getMonth().toString();
     let day = now.getDate().toString(); 
     this.currentDate = `${month}/${day}/${year}`;
   }

   goToDetailsPage(id, ad?) {
     if (ad) {
      this.router.navigate(['../../', id], {relativeTo: this.route})
     } else this.router.navigate(['../', id], {relativeTo: this.route})
   }
}
