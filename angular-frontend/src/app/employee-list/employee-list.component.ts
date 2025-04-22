import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../studentsModel/employee.service'; // Adjust the path if necessary

import { Router } from '@angular/router';
import { Student } from '../studentsModel/student'; // Adjust the path if necessary
import { Checkload } from '../studentsModel/check';

@Component({
  selector: 'app-Employee-list',
  templateUrl: './Employee-list.component.html',
  styleUrls: ['./Employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee: Student[];
  checkload: Checkload; // Replace 'any' with the correct type if known


  constructor(private EmployeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.EmployeeService.getEmployeesList().subscribe(data => {
      this.Employee = data;
    });
  }


  EmployeeDetails(id: number){
    this.router.navigate(['Employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-Employee', id]);
  }

  deleteEmployee(id: number){
    this.EmployeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
