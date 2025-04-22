import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../studentsModel/employee.service'; // Adjust the path if necessary

import { Router } from '@angular/router';
import { Student } from '../studentsModel/student'; // Adjust the path if necessary
import { Checkload } from '../studentsModel/check';

@Component({
  selector: 'app-allocate-memory',
  templateUrl: './allocate-memory.component.html',
  styleUrls: ['./allocate-memory.component.css']
})
export class AllocateMemoryComponent implements OnInit {
 Employee: Student[];
  public Checkload: Checkload; // Replace 'any' with the correct type if known
 public cpu: number;
 public requests: number;
  public response: String;

  constructor(private EmployeeService: EmployeeService,    
    private router: Router) { }

  ngOnInit(): void {
  }

  StartCpuThreadsCustom(){
    this.EmployeeService.startCpuThreadsCustom(this.cpu, this.requests).subscribe(data => {
      this.response = data.toString();
      console.log(this.response);
    });
  }


  startallocateMemory(){
    this.EmployeeService. startallocateMemory(this.cpu, this.requests).subscribe(data => {
      this.response = data.toString();
      console.log(this.response);
    });
  }

  async onSubmit(){
    console.log("Check ........");
    this.StartCpuThreadsCustom();
  }
}
