import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from '../shared/articule.models';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  // votes: number;
  // title: string;
  // link: string;
  constructor() {
    this.article = new Article(
       'Angular',
       'http://angular.io',
       10);
  }

  voteUp(): boolean {
   this.article.voteUp();
   return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
