import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageStoreService } from './local-storage-store.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LocalStorageStoreService],
  declarations: []
})
export class AppCommonModule { }
