import { NgModule,Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { 


  }

  departments = [
    { id: 1, value: 'HR' },
    { id: 2, value: 'ADMN' },
    { id: 3, value: 'ENGG' }];

  ngOnInit() {
  }

  onClear() {
    // This resets all the formcontrol to NULL
    this.service.form.reset();
    // This routine sets all the formcontrol to default values.
    this.service.initializeFormGroup();
  }

}
