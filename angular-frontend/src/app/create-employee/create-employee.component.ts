import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../Employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-Employee',
  templateUrl: './create-Employee.component.html',
  styleUrls: ['./create-Employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Employee: Employee = new Employee();
  constructor(private EmployeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.EmployeeService.createEmployee(this.Employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/Employee']);
  }
  
  onSubmit(){
    console.log(this.Employee);
    this.saveEmployee();
  }
}
