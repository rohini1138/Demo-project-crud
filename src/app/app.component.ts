import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeServiceService } from './services/employee-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employeeForm: FormGroup;

  employees : Employee[];
  isEmployeeForm : boolean;
  newEmpoyee: any = {};
  isNewEmp : boolean;

  constructor(private employeeService : EmployeeServiceService, private fb: FormBuilder){
    this.createForm();
  }
  ngOnInit(){
    this.employees = this.getEmployees();  
  }

  createForm(){
    this.employeeForm = this.fb.group({
      FirstName : ['', Validators.required]
    });
  }

  getEmployees() : Employee[]{
    return this.employeeService.getEmployeesFromData();
  }
  
  displayEmployee(employee : Employee){
    if(this.employees.length){
      this.newEmpoyee ={};
    }
    this.isEmployeeForm = true;
    this.isNewEmp = true;
  }

  saveEmployee(employee : Employee){
    if(this.isNewEmp){
      this.employeeService.saveEmployee(employee);
    }
    this.isEmployeeForm = false;
  }
 
  removeEmployee(employee : Employee){
    this.employeeService.deleteEmployee(employee);
  }
}
