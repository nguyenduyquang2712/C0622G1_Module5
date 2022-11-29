import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    name: new FormControl(),
    area:  new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOfOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloors: new FormControl(),
    attachFacility: new FormControl(),
    facilityFree: new FormControl(),
    facilityType:new FormControl(),
  });

  constructor(private _facilityService: FacilityService,
              private _toastService: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.facilityForm.value;
    this._facilityService.saveFacility(facility).subscribe(data => {
      this._toastService.success('Chém anh Công thành công', 'Create Facility!', {
        positionClass: 'toast-top-right',
        timeOut: 7000,
      });
    });
  }
}
