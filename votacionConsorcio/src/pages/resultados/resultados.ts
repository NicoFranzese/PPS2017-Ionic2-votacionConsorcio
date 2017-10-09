import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VotacionProvider } from '../../providers/votacion/votacion';

import { LoginPage } from '../login/login';
/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  private arrVotacionPlantas = [];
  private arrVotacionMatafuegos = [];
  private cantVotosPlantas = [0, 0];
  private cantVotosMatafuegos = [0, 0];

  constructor(public navCtrl: NavController,
    private servicioVotacion: VotacionProvider,
    private navParams: NavParams) {
    this.arrVotacionPlantas = this.navParams.get("arrPlantas");
    this.arrVotacionMatafuegos = this.navParams.get("arrMatafuegos");
    this.contarVotos();
  }

  ionViewDidLoad() {
   
  }

  private contarVotos() {
    if (this.arrVotacionPlantas.length != undefined) {
      this.cantVotosPlantas = [0, 0];
      for (let element of this.arrVotacionPlantas) {
        if (element.resultado == 'Si')
          this.cantVotosPlantas[0] += 1;

        else
          this.cantVotosPlantas[1] += 1;
      }
    }

    if (this.arrVotacionMatafuegos.length != undefined) {
      this.cantVotosMatafuegos = [0, 0];
      for (let element of this.arrVotacionMatafuegos) {
        if (element.resultado == 'Si')
          this.cantVotosMatafuegos[0] += 1;
        else
          this.cantVotosMatafuegos[1] += 1;
      }
    }
  }

  private Desloguear() {
    this.navCtrl.push(LoginPage);
  }

}
