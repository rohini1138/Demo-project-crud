import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employeelist : Employee[] = [
    {
      id: 1,
      firstname: 'Priya',
      lastname: 'Pillai'
    },
    {
      id: 2,
      firstname: 'Hema',
      lastname: 'M'
    } 
];

  constructor() { }

  getEmployeesFromData() : Employee[]{
    return this.employeelist;
  }

  saveEmployee(employee : Employee){
    employee.id = this.employeelist.length +1;
    this.employeelist.push(employee);
  }

  deleteEmployee(employee : Employee){
    this.employeelist.splice(this.employeelist.indexOf(employee),1)
  }
}
