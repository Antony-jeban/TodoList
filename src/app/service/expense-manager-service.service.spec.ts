import { TestBed } from '@angular/core/testing';

import { ExpenseManagerServiceService } from './expense-manager-service.service';

describe('ExpenseManagerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseManagerServiceService = TestBed.get(ExpenseManagerServiceService);
    expect(service).toBeTruthy();
  });
});
