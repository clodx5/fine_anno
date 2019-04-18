import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input()  article:Article;

    constructor() {
      //popolato dall'@Input
    }

    voteUp(): Boolean {
      this.article.voteUp();
      return false;
    }

    voteDown():Boolean {
      this.article.voteDown();
      return false;
    }


    ngOnInit() {}

}
