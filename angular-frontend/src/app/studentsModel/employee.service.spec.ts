import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service'; // Adjust the path as needed

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
