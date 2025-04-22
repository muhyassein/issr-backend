import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './Employee-list/Employee-list.component';
import { CreateEmployeeComponent } from './create-Employee/create-Employee.component';
import { EmployeeDetailsComponent } from './Employee-details/Employee-details.component';
import { UpdateEmployeeComponent } from './update-Employee/update-Employee.component';
import { CheckLoadComponent } from './check-load/check-load.component';
import { AllocateMemoryComponent } from './allocate-memory/allocate-memory.component';

const routes: Routes = [
  {path: 'Employee', component: EmployeeListComponent},
  {path: 'create-Employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'Employee', pathMatch: 'full'},
  {path: 'update-Employee/:id', component: UpdateEmployeeComponent},
  {path: 'Employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'allocate-memory', component: AllocateMemoryComponent},
  {path: 'check-load', component: CheckLoadComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
