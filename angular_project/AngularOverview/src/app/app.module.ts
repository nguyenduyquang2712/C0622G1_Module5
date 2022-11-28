import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3_angular_overview/calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AngularColorPickerAppComponent } from './ss3_angular_overview/angular-color-picker-app/angular-color-picker-app.component';
import { ArticleComponent } from './ss4_angular_template/article/article.component';
import { LikeComponent } from './ss4_angular_template/like/like.component';
import { NavbarComponent } from './ss4_angular_template/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_template/footer/footer.component';
import { RatingbarComponent } from './ss5_components_interaction/exercices/vote_app/ratingbar/ratingbar.component';
import { CountDownTimerComponent } from './ss5_components_interaction/exercices/count_down/count-down-timer/count-down-timer.component';
import { RegisterComponentComponent } from './ss6_angular_form/exercises/register-component/register-component.component';
import { LoginComponentComponent } from './ss6_angular_form/exercises/login-component/login-component.component';
import { ProductCreateComponent } from './ss7_service_router/exercises/product_management/product/product-create/product-create.component';
import { ProductListComponent } from './ss7_service_router/exercises/product_management/product/product-list/product-list.component';
import {ProductRoutingModule} from "./ss7_service_router/exercises/product_management/product-routing.module";
import {RouterModule} from "@angular/router";
import { ProductEditComponent } from './ss7_service_router/exercises/product_management/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7_service_router/exercises/product_management/product/product-delete/product-delete.component';
import { DictionaryPageComponent } from './ss7_service_router/exercises/dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './ss7_service_router/exercises/dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryRoutingModule} from "./ss7_service_router/exercises/dictionary/dictionary-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './ss9_connect_backend/exercises/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AngularColorPickerAppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    RatingbarComponent,
    CountDownTimerComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    // DictionaryRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
