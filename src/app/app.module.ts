import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppCommonModule } from './app-common/app-common.module';
import { AdsFormComponent } from './ads/ads-form/ads-form.component';
import { AdsModule } from './ads/ads.module';
import { StoreService } from './app-common/store.service';
import { AdsListComponent } from './ads/ads-list/ads-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsModule,
    AppCommonModule,
    NgxPaginationModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
