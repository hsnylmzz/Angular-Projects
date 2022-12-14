import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title : 'İstanbul',
    imageUrl : 'assets/istanbul.jpg',
    username : 'hyilmaz28',
    content : 'İstanbul harika'
  },
  {
    title : 'Ankara',
    imageUrl : 'assets/ankara.jpg',
    username : 'bekici06',
    content : 'Ankara çok güzel'
  },
  {
    title : 'İzmir',
    imageUrl : 'assets/izmir.jpg',
    username : 'mehmet35',
    content : 'Saat kulesi harika'
  }
]
}
