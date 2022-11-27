import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private _facilityList: Facility[] = [
    {
      id: 1,
      name: 'Villa 01',
      area: 200,
      cost: 5500,
      maxPeople: 12,
      numberOfFloors:2,
      rentType: 'Day',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'None',
      poolArea: 20,
      facilityType:'Villa'
    },

    {
      id: 2,
      name: 'House 01',
      area: 200,
      cost: 7000,
      numberOfFloors:1,
      maxPeople: 5,
      rentType: 'Month',
      standardRoom: 'Normal',
      descriptionOfOtherConvenience: 'None',
      facilityType:'House'
    },

    {
      id: 3,
      name: 'Room 01',
      area: 50,
      cost: 1000,
      maxPeople: 2,
      rentType: 'Hour',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'karaoke',
      facilityFree: '1 xe may',
      facilityType:'Room'
    }

  ];
  constructor() { }

  get facilityList(): Facility[] {
    return this._facilityList;
  }

  set facilityList(value: Facility[]) {
    this._facilityList = value;
  }
}
