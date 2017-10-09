import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VotacionPage } from '../votacion/votacion';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TipoVotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipo-votacion',
  templateUrl: 'tipo-votacion.html',
})
export class TipoVotacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TipoVotacionPage');
  }

  SeleccionTipoVotacion(tipo){
    if ((tipo == "") || (tipo == undefined) || (tipo == null)) {
      this.presentToast("Debe seleccionar tipo de votación");   
    } else {
      localStorage.setItem("tipo",tipo);
      this.navCtrl.push(VotacionPage);
    }
  }

  private presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
