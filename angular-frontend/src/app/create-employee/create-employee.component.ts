import { Component, OnInit } from '@angular/core';
import { Student } from '../studentsModel/student';
import { EmployeeService } from '../studentsModel/employee.service'; // Adjust the path if necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-Employee',
  templateUrl: './create-Employee.component.html',
  styleUrls: ['./create-Employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Employee: Student = new Student();
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
