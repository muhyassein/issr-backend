import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../studentsModel/employee.service'; // Adjust the path if necessary
import { Student } from '../studentsModel/student'; // Adjust the path as needed

@Component({
  selector: 'app-Employee-details',
  templateUrl: './Employee-details.component.html',
  styleUrls: ['./Employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  Employee: Student
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Employee = new Student();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.Employee = data;
    });
  }

}
