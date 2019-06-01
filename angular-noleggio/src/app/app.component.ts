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

  constructor(public http: HttpClient) {}


  // registrazione
  makeRegis(nome: HTMLInputElement, cognome: HTMLInputElement, dataN: HTMLInputElement, email: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, cartaCredito: HTMLInputElement): boolean {
    this.registrazione(nome.value, cognome.value , dataN.value, email.value, username.value, password.value, cartaCredito.value);
    return false;
  }

  registrazione(nome:string, cognome:string, dataN:string, email:string, username:string, password:string, cartaCredito:string): void {

    const headers = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded'
    });

   const params = new HttpParams()
    .set('nome', nome)
    .set('cognome', cognome)
    .set('dataN', dataN)
    .set('email', email)
    .set('username', username)
    .set('password', password)
    .set('cartaCredito', cartaCredito);

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node19.codenvy.io:36436/registrazione', null, options)
     .subscribe(data => {
       this.data = data;
        if(data == true){
          alert("ok");
       }else{
          alert("err");
       }
     });
  }



  //login
  makeLogin(user: HTMLInputElement, pw: HTMLInputElement): boolean {
      //post a server node per verificare credenziali
    return false;
  }

  login(): void {

  }

  //noleggio
  makeNoleggio(idmono: HTMLInputElement): boolean {
      this.noleggio(idmono.value); //aggiungere id utente, ora, etc
      return false;
  }

  noleggio(idmono:string): void {

  }


  //riconsegna
  makeRicon(idmono: HTMLInputElement): boolean {
      this.riconsegna(idmono.value);
      return false;
  }

  riconsegna(idmono:string): void {

  }

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
    .set('problemi', problemi);

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
