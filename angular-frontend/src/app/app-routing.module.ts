import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './Employee-list/Employee-list.component';
import { CreateEmployeeComponent } from './create-Employee/create-Employee.component';
import { UpdateEmployeeComponent } from './update-Employee/update-Employee.component';
import { EmployeeDetailsComponent } from './Employee-details/Employee-details.component';

const routes: Routes = [
  {path: 'Employee', component: EmployeeListComponent},
  {path: 'create-Employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'Employee', pathMatch: 'full'},
  {path: 'update-Employee/:id', component: UpdateEmployeeComponent},
  {path: 'Employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
