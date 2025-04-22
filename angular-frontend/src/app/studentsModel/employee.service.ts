import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from './student'; // Adjust the path as needed
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = (window as any)['env']['ENV_API_ENDPOINT'] || 'http://localhost:8080/issr/api/v1/employees';
  private checkURL = (window as any)['env']['ENV_CHECK_ENDPOINT'] || 'http://localhost:8888/health/api/v1/load';

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createEmployee(Employee: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Employee);
  }

  getEmployeeById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, Employee: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, Employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  startCpuThreadsCustom(cpucount: number, requestscount: number): Observable<string> {
    const url = `${this.checkURL}/cpu?cpu=${cpucount}&requests=${requestscount}`;
    return this.httpClient.get<string>(url, { responseType: 'text' as 'json' }).pipe(
      map((response: string): string => response), // Map response to string
      catchError((err: any): Observable<never> => {
      console.error('Error occurred:', err);
      throw new Error('Failed to retrieve data'); // Handle error appropriately
      })
    );
  }
  
  startallocateMemory(cpucount: number, requestscount: number): Observable<string> {
    const url = `${this.checkURL}/allocatememory?each=${cpucount}&requests=${requestscount}`;
    return this.httpClient.get<string>(url, { responseType: 'text' as 'json' }).pipe(
      map((response: string): string => response), // Map response to string
      catchError((err: any): Observable<never> => {
      console.error('Error occurred:', err);
      throw new Error('Failed to retrieve data'); // Handle error appropriately
      })
    );
  }
  
}
