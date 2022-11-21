import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.css']
})
export class AngularColorPickerAppComponent implements OnInit {
  background: string = "rgb(0,0,0)";
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  valueHex:string;
  constructor() {
  }
  rgbToHex(r, g, b) {
    this.valueHex= "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }
  ngOnInit(): void {
  }

  onChange() {
    this.background = 'rgb(' + this.value1 + ', ' + this.value2 + ', ' + this.value3 + ')';
  }

}
