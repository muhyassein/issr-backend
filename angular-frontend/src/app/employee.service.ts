import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = (window as any)['env']['ENV_API_ENDPOINT'] || 'http://localhost:8080/issr/api/v1/employees';

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(Employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, Employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, Employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
