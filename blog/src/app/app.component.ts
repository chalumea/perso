import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  
  posts = [
    {
      title: 'Mon premier post',
	  content: 'Ceci est mon premier post super cool et franchement je suis hyper content parce que c\'est marrant',
	  loveIts: 2,
	  created_at: Date()
    },
    {
      title: 'Mon deuxième post',
	  content: 'Ceci est mon deuxième post super bon',
	  loveIts: -2,
	  created_at: Date()
    },
    {
      title: 'Encore un post',
	  content: 'Ceci est un post de plus',
	  loveIts: 0,
	  created_at: Date()
    }
  ];
}
