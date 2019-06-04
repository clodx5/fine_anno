import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Segnalazione } from './segnalazione.model';

@Component({
  selector: 'app-segnalazione',
  templateUrl: './segnalazione.component.html',
  styleUrls: ['./segnalazione.component.css']
})
export class SegnalazioneComponent implements OnInit {

  data: Object;
  constructor(public http: HttpClient) {}

  //segnalazione
  makeSegn(idmono: HTMLInputElement, problemi: HTMLInputElement[]): boolean {
      var probs = [];
      problemi.forEach(myFunction);

      function myFunction(value) {
        probs.push(value);
      }

      this.segnalazione(idmono.value, probs);
      return false;
  }

  segnalazione(idmono:string, problemi:string[]): void {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

   const params = new HttpParams()
    .set('idmono', idmono)
    .set('problemi', JSON.stringify(problemi));

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node19.codenvy.io:36436/segnalazione', null, options)
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
