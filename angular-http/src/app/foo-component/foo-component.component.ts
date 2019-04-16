import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})

export class FooComponentComponent implements OnInit {

  fooData : Foo[];
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  oFoo : Observable<Foo[]>;
  constructor(public http: HttpClient) { }

  makeRequest(): void {
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }

  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }

  //metodo alternativo al metodo makeRequest
  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  //L'operazione di post necessita un parametro in più.
  //Viene creata una stringa (JSON.strigify) a partire da un oggetto Typescript
  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeTypedRequest() : void
  {
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

  ngOnInit() {}

}
