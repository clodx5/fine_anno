import { Component } from '@angular/core';
import { Registrazione } from './registrazione/registrazione.model';
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
  registrazione(nome: HTMLInputElement, cognome: HTMLInputElement, dataN: HTMLInputElement, email: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, cartaCredito: HTMLInputElement): void {

   const headers = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded'
   });

   const params = new HttpParams()
    .set('nome', nome.value)
    .set('cognome', cognome.value)
    .set('dataN', dataN.value)
    .set('email', email.value)
    .set('username', username.value)
    .set('password', password.value)
    .set('cartaCredito', cartaCredito.value);

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node24.codenvy.io:33414/registrazione', null, options)
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
  makelogin(user: HTMLInputElement, pw: HTMLInputElement): boolean {
      //post a server node per verificare credenziali
    return false;
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
  public login(): void {
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


}
