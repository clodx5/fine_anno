import { Component } from '@angular/core';
import { Registrazione } from './registrazione/registrazione.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNoleggio';

  utenti: Registrazione[];
  data: Object;
  loading: boolean;
  oUt: Observable<Registrazione[]>;
  postUt: Observable<Object>;
  tempUt: Registrazione;

  // var per mostra-nascondi
  public reg: boolean;
  public log: boolean;
  public nol: boolean;
  public ric: boolean;
  public seg: boolean;
  public err: boolean;

  public username = "";

  constructor(public http: HttpClient) {
    //get
    this.utenti = new Array<Registrazione>();
    this.oUt = this.http.get<Registrazione[]>('http://node24.codenvy.io:33414/registrazione');
    this.oUt.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
    for(let element of data)
    {
       this.utenti.push(new Registrazione(element.nome, element.cognome, element. dataN, element.cf, element.sesso, element.email, element.username, element.password, element.cartaCredito));
    }
  }

  // registrazione
  makeCompactRequest(nome: HTMLInputElement, cognome: HTMLInputElement, dataN: HTMLInputElement, cf: HTMLInputElement, sesso: HTMLInputElement, email: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, cartaCredito: HTMLInputElement): boolean {
    this.tempUt = new Registrazione(nome.value, cognome.value, dataN.value, cf.value, sesso.value, email.value, username.value, password.value, cartaCredito.value);
    this.loading = true;
    this.postUt = this.http.post('http://node24.codenvy.io:33414/registrazione', JSON.stringify(this.tempUt));
    this.utenti.push(new Registrazione(nome.value, cognome.value, dataN.value, cf.value, sesso.value, email.value, username.value, password.value, cartaCredito.value));

    this.postUt.subscribe(data => {
      this.data = data;
      this.loading = false;
      this.utenti.push(this.tempUt);
    });

    return false;
  }

  //login
  makelogin(user: HTMLInputElement, pw: HTMLInputElement): boolean {
      //post a server node per verificare credenziali
    return false;
  }

  // mostra-nascondi
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


}
