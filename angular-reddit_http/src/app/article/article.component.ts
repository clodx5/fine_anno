import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
   data: Object;
   loading: boolean;
   o :Observable<Object>;

    constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }

   /*voteUp(): Boolean {
      this.article.voteUp();
      return false;
    }

    voteDown():Boolean {
      this.article.voteDown();
      return false;
    }*/


    ngOnInit() {}

}
