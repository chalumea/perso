import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  isAuth = true;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLikes: number;
  thumbsup: number = 0;

  constructor() { 
  }

  ngOnInit() {
    this.thumbsup = this.postLikes;
  }
  
getLikes() {
  return this.thumbsup;
}

  onLike() {
    this.thumbsup++;
  }
  
  
  onDislike() {
	  this.thumbsup--;
  }

}
