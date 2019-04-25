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
      this.loading = true;
      this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
      this.o.subscribe(this.getData);
    }

    getData = (d : Object) =>
    {
      this.data = new Object(d);
      this.loading = false;
    }

    makeCompactPost(): void {
      this.loading = true;
      this.http
        .post('https://jsonplaceholder.typicode.com/posts',
          JSON.stringify({
            body: 'bar',
            title: 'article',
            userId: 1
          })
        )
        .subscribe(data => {
          this.data = data;
          this.loading = false;
      });
    }


    ngOnInit() {}

}
