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
import { DintionaryPageComponent } from './ss7_service_router/exercises/dictionary/dintionary-page/dintionary-page.component';
import { DintionaryDetailComponent } from './ss7_service_router/exercises/dictionary/dintionary-detail/dintionary-detail.component';

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
    DintionaryPageComponent,
    DintionaryDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
