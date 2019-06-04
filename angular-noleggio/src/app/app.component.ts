import { Component } from '@angular/core';
import { Registrazione } from './registrazione/registrazione.model';
import { Login } from './login/login.model';
import { Segnalazione } from './segnalazione/segnalazione.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNoleggio';

  data: Object;

  // var per mostra-nascondi
  public reg: boolean;
  public log: boolean;
  public nol: boolean;
  public ric: boolean;
  public seg: boolean;
  public err: boolean;

  public username = "";
  public dataora = new Date();
  public time = '';

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


  // mostra-nascondi _________________________________
  public regis(): void {
    this.reg = true;
    this.log = false;
    this.nol = false;
    this.ric = false;
    this.seg = false;
    this.err = false;
  }
  public logi(): void {
    this.reg = false;
    this.log = true;
    this.nol = false;
    this.ric = false;
    this.seg = false;
    this.err = false;
  }
  public noleg(): void {
      if(this.username!="") {
        this.reg = false;
        this.log = false;
        this.nol = true;
        this.ric = false;
        this.seg = false;
      } else {
        this.reg = false;
        this.log = false;
        this.nol = false;
        this.ric = false;
        this.seg = false;
        this.err = true;
      }
  }
  public ricon(): void {
    if(this.username!="") {
        this.reg = false;
        this.log = false;
        this.nol = false;
        this.ric = true;
        this.seg = false;
    } else {
        this.reg = false;
        this.log = false;
        this.nol = false;
        this.ric = false;
        this.seg = false;
        this.err = true;
    }
  }
  public segn(): void {
      if(this.username!="") {
        this.reg = false;
        this.log = false;
        this.nol = false;
        this.ric = false;
        this.seg = true;
    } else {
        this.reg = false;
        this.log = false;
        this.nol = false;
        this.ric = false;
        this.seg = false;
        this.err = true;
    }
  }
//_____________________________________________________________________

ngOnInit() {
  }

}
