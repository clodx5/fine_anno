import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Noleggio } from './noleggio.model';

@Component({
  selector: 'app-noleggio',
  templateUrl: './noleggio.component.html',
  styleUrls: ['./noleggio.component.css']
})
export class NoleggioComponent implements OnInit {

  public username = "";
  public dataora = new Date();
  public time = '';

  data: Object;
  constructor(public http: HttpClient) {}

  //noleggio
  makeNoleggio(idmono: HTMLInputElement): boolean {
      this.dataora = new Date();
      this.time = this.dataora.toString();
      this.noleggio(idmono.value, this.username, this.time);
      return false;
  }

  noleggio(idmono:string, user:string, time:string): void {
    const headers = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded'
    });

   const params = new HttpParams()
    .set('id_mono', idmono)
    .set('id_user', user)
    .set('dataora', time);

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node19.codenvy.io:36436/noleggio', null, options)
     .subscribe(data => {
       this.data = data;
        if(data == true){
          alert("ok");
       }else{
          alert("err");
       }
     });
  }


  ngOnInit() {
  }

}
