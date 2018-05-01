import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageStoreService } from './local-storage-store.service';

describe('LocalStorageStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageStoreService]
    });
  });

  it('should be created', inject([LocalStorageStoreService], (service: LocalStorageStoreService) => {
    expect(service).toBeTruthy();
  }));
});
