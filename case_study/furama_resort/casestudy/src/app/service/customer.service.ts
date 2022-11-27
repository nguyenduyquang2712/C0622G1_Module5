import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customerList: Customer[] = [
    {
      id: 1,
      name: 'Duy Quang',
      dateOfBirth: '01/11/2000',
      gender: 1,
      idCard: '906395960',
      phoneNumber: '0359903360',
      email: 'quang@gmail.com',
      customerType: 'Diamond',
      address: 'Hue'
    },
    {
      id: 0,
      name: 'Hoang Giang',
      dateOfBirth: '28/12/2000',
      gender: 0,
      idCard: '523456789',
      phoneNumber: '0903663123',
      email: 'giang@gmail.com',
      customerType: 'Diamond',
      address: 'Hue'
    }
  ];
  constructor() { }

  get customerList(): Customer[] {
    return this._customerList;
  }

  set customerList(value: Customer[]) {
    this._customerList = value;
  }
  getAll() {
    return this.customerList;
  }
}
