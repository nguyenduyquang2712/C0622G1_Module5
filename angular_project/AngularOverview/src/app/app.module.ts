import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3_angular_overview/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { AngularColorPickerAppComponent } from './ss3_angular_overview/angular-color-picker-app/angular-color-picker-app.component';
import { ArticleComponent } from './ss4_angular_template/article/article.component';
import { LikeComponent } from './ss4_angular_template/like/like.component';
import { NavbarComponent } from './ss4_angular_template/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AngularColorPickerAppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
