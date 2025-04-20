import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee-list/Employee-list.component';
import { CreateEmployeeComponent } from './create-Employee/create-Employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-Employee/update-Employee.component';
import { EmployeeDetailsComponent } from './Employee-details/Employee-details.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
