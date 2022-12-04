import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facility[];
  nameSearch: string = "";
  numberRecord :number;
  currentPage :number;
  totalPage: number;
  deleteFacility:Facility;

  constructor(private _facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.nameSearch=  "";
    this.numberRecord =2;
    this.currentPage =1;
    this.getAllFacility();
  }


  private getAllFacility() {
    this._facilityService.findAll(this.nameSearch).subscribe(data => {
      this.totalPage = Math.ceil(data.length / this.numberRecord);
      this._facilityService.findAllFacility(this.numberRecord, this.currentPage, this.nameSearch).subscribe(pagingList => {
        this.facilities = pagingList
      })
    });
  }

  next(): void {
    // this.showSuccess();
    this.currentPage++;
    // console.log(this.curPage)
    this._facilityService.findAllFacility(this.numberRecord, this.currentPage, this.nameSearch).subscribe(pagingList => {
      this.facilities = pagingList;
    });
  }

  previous(): void {
    this.currentPage--;
    this._facilityService.findAllFacility(this.numberRecord, this.currentPage, this.nameSearch).subscribe(pagingList => {
        this.facilities = pagingList;
      }
    )
  }

  search(value: string) {
    this.nameSearch = value;
    console.log(this.nameSearch)
    this.currentPage = 1;
    this._facilityService.findAll(this.nameSearch).subscribe(data => {
      this.totalPage = Math.ceil(data.length / this.numberRecord);
      console.log(data.length)
      this._facilityService.findAllFacility(this.numberRecord, this.currentPage, this.nameSearch).subscribe(pagingList => {
        this.facilities = pagingList
      })
    });
  }

  sendToDetailModal(id: number) {
    this._facilityService.findFacilityById(id).subscribe(data=>{
      this.deleteFacility = data;
    })
  }

  deleteItemFacility(id: number) {
    this._facilityService.deleteFacility(id).subscribe(data=>{
      console.log(data)
    })
  }
}
