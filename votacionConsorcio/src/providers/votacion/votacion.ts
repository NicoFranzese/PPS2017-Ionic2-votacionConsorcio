import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the VotacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VotacionProvider {

  private usuarioObservable: FirebaseListObservable<any[]> = this.db.list('/usuario');
  private MatafuegosObservable: FirebaseListObservable<any[]> = this.db.list('/Matafuegos');
  private PlantasObservable: FirebaseListObservable<any[]> = this.db.list('/Plantas');

  constructor(public http: Http, public db: AngularFireDatabase) {

  }


  public getUsuarios() {
    return this.usuarioObservable;
  }

  public getTipo(tipo) {
    switch (tipo) {
      case "Plantas":
        return this.PlantasObservable;
      case "Matafuegos":
        return this.MatafuegosObservable;

    }
  }

  public postResultado(tipo, usuario, resultado) {
    let tipoObservable: FirebaseListObservable<any[]>;

    switch (tipo) {
      case "Plantas":
        tipoObservable = this.PlantasObservable;
        break;
      case "Matafuegos":
        tipoObservable = this.MatafuegosObservable;
        break;
    }

    tipoObservable.push({ usuario: usuario, resultado: resultado });

  }
}
