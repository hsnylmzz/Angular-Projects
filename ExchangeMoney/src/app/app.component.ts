import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  money:number = 0;

  onMoneyChange(value: string)
  {
      this.money=parseFloat(value);
  }
}
