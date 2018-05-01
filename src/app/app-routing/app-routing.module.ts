import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdsListComponent } from '../ads/ads-list/ads-list.component';
import { AdsEditComponent } from '../ads/ads-edit/ads-edit.component';
import { StartPageComponent } from '../ads/start-page/start-page.component';

const routes: Routes = [
  {path: '', component: StartPageComponent, pathMatch: 'full'},
  {path: 'edit', component: AdsEditComponent},
  {path: 'edit/:id', component: AdsEditComponent},
  {path: 'delete/:id', redirectTo: ''},
  {path: ':id', component: AdsEditComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
