import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../Employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-Employee-list',
  templateUrl: './Employee-list.component.html',
  styleUrls: ['./Employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee: Employee[];

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
