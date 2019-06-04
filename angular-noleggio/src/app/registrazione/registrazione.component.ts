import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registrazione } from './registrazione.model';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  data: Object;
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

  ngOnInit() {
  }

}
