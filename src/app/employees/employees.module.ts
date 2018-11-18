import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import {MaterialModule} from '../material/material.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    EmployeesRoutingModule
  ],
  providers:[EmployeeService]
})
export class EmployeesModule { }
