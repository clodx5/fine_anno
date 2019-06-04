import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Object;
  constructor(public http: HttpClient) {}

  //login
  makeLogin(user: HTMLInputElement, pw: HTMLInputElement): boolean {
      //post a server node per verificare credenziali
    this.login(user.value, pw.value);

    //var username usata per test funzionamento mostra/nascondi
    this.username = user.value;

    return false;
  }

  login(user: string, password: string): void {
    const headers = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded'
    });

   const params = new HttpParams()
    .set('username', user)
    .set('password', password);

    const options = {
      headers,
      params,
      withCredentials: false
    };

    this.http.post('http://node19.codenvy.io:36436/login', null, options)
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
