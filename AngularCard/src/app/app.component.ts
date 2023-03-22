import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [

    {
      title: 'Deli Kurt',
      imageUrl: '/assets/atsiz.jpg',
      username: 'atsiz',
      content: 'Deli Kurt romanı güzel'
    },
    {
      title: 'Ateşten Gömlek',
      imageUrl: 'assets/halideedipadivar.jpg',
      username: 'hedipadivar',
      content: 'İzmir işgalini anlatmaktadır'
    },
    {
      title: 'Yaban',
      imageUrl: 'assets/yakupkadrikaraosmanoglu.jpg',
      username: 'ykadrikaraosmanoglu',
      content: 'Kurtuluş Savaşı yıllarında geçmektedir.'
    },

  ];
}
