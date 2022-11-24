import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListFacilityComponent } from './facilities/list-facility/list-facility.component';
import { EditFacilityComponent } from './facilities/edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './facilities/create-facility/create-facility.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
