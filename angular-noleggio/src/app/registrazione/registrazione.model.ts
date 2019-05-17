export class Prenotazione {
  nome: string;
  cognome: string;
  email: string;
  username: string;
  password: string;
  cartaCredito: string;
  sesso: string;

  constructor(nome: string, cognome: string, email: string, username: string, password: string, cartaCredito: string, sesso: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.username = username;
    this.password = password;
    this.cartaCredito = cartaCredito;
    this.sesso = sesso;
  }

}