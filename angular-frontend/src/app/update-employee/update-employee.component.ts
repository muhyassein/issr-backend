import { Component, OnInit } from '@angular/core';
import { Student } from '../studentsModel/student';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../studentsModel/employee.service'; // Adjust the path if necessary

@Component({
  selector: 'app-update-Employee',
  templateUrl: './update-Employee.component.html',
  styleUrls: ['./update-Employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  Employee: Student = new Student();
  constructor(private EmployeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.EmployeeService.getEmployeeById(this.id).subscribe(data => {
      this.Employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.EmployeeService.updateEmployee(this.id, this.Employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/Employee']);
  }
}
