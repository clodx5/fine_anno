import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Riconsegna } from './riconsegna.model';

@Component({
  selector: 'app-riconsegna',
  templateUrl: './riconsegna.component.html',
  styleUrls: ['./riconsegna.component.css']
})
export class RiconsegnaComponent implements OnInit {

  public username = "";
  public dataora = new Date();
  public time = '';

  data: Object;
  constructor(public http: HttpClient) {}


  //riconsegna
  makeRicon(idmono: HTMLInputElement): boolean {
      this.dataora = new Date();
      this.time = this.dataora.toString();
      this.riconsegna(idmono.value, this.time);
      return false;
  }

  riconsegna(idmono:string, time:string): void {
    const headers = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded'
    });

   const params = new HttpParams()
    .set('id_mono', idmono)
    .set('dataora', time);

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node19.codenvy.io:36436/riconsegna', null, options)
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
