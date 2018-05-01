import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { AdsEditComponent } from './ads-edit/ads-edit.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsService } from './ads.service';
import { StartPageComponent } from './start-page/start-page.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../app-common/users.service';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AdsService, UsersService],
  declarations: [AdsFormComponent, AdsEditComponent, AdsListComponent, StartPageComponent]
})
export class AdsModule { }
