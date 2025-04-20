import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../Employee.service';

@Component({
  selector: 'app-Employee-details',
  templateUrl: './Employee-details.component.html',
  styleUrls: ['./Employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  Employee: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.Employee = data;
    });
  }

}
