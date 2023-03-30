import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meter : number = 0;

  onMeterChange(value : string)
  {
    this.meter = parseFloat(value);
  }
}
