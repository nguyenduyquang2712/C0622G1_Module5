import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private _facilityList: Facility[] = [
    // {
    //   id: 1,
    //   name: 'Villa 01',
    //   area: 200,
    //   cost: 5500,
    //   maxPeople: 12,
    //   numberOfFloors:2,
    //   rentType: 'Day',
    //   standardRoom: 'Vip',
    //   descriptionOfOtherConvenience: 'None',
    //   poolArea: 20,
    //   facilityType:'Villa'
    // },
    //
    // {
    //   id: 2,
    //   name: 'House 01',
    //   area: 200,
    //   cost: 7000,
    //   numberOfFloors:1,
    //   maxPeople: 5,
    //   rentType: 'Month',
    //   standardRoom: 'Normal',
    //   descriptionOfOtherConvenience: 'None',
    //   facilityType:'House'
    // },
    //
    // {
    //   id: 3,
    //   name: 'Room 01',
    //   area: 50,
    //   cost: 1000,
    //   maxPeople: 2,
    //   rentType: 'Hour',
    //   standardRoom: 'Vip',
    //   descriptionOfOtherConvenience: 'karaoke',
    //   facilityFree: '1 xe may',
    //   facilityType:'Room'
    // }

  ];
  constructor(private _httpClient:HttpClient) { }
  findAll(nameSearch:string):Observable<Facility[]>{
    return this._httpClient.get<Facility[]>('http://localhost:3000/facilities'+"?name_like="+nameSearch);
  }
  findAllFacility(numberRecord: number, curPage: number, nameSearch:string):Observable<Facility[]> {
    return this._httpClient.get<Facility[]>('http://localhost:3000/facilities'+"?_page="+curPage+"&_limit="+numberRecord+"&name_like="+nameSearch);
  }

  set facilityList(value: Facility[]) {
    this._facilityList = value;
  }

  saveFacility(facility: Facility):Observable<Facility> {
    return this._httpClient.post<Facility>('http://localhost:3000/facilities',facility);
  }
}
