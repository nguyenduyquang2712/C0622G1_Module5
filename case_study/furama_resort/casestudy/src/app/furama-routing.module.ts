import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListFacilityComponent} from "./facilities/list-facility/list-facility.component";
import {CreateFacilityComponent} from "./facilities/create-facility/create-facility.component";
import {EditFacilityComponent} from "./facilities/edit-facility/edit-facility.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";

const routes:Routes = [
  {path:"home", component:HomeComponent},
  {path:"facilities",component:ListFacilityComponent},
  {path:"facilities/create",component:CreateFacilityComponent},
  {path:"facilities/edit",component:EditFacilityComponent},
  {path:"customers",component:ListCustomerComponent},
  {path:"customers/create",component: CreateCustomerComponent},
  {path:"customers/edit",component: EditCustomerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule { }
