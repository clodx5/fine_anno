export class Registrazione {
  nome: string;
  cognome: string;
  dataN: string;
  cf: string;
  sesso: string;
  email: string;
  username: string;
  password: string;
  cartaCredito: string;

  constructor(nome: string, cognome: string, dataN: string, cf: string, sesso: string, email: string, username: string, password: string, cartaCredito: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.dataN = dataN;
    this.cf = cf;
    this.sesso = sesso;
    this.email = email;
    this.username = username;
    this.password = password;
    this.cartaCredito = cartaCredito;
  }

}