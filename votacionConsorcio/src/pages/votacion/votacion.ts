import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { VotacionProvider } from '../../providers/votacion/votacion';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the VotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votacion',
  templateUrl: 'votacion.html',
})
export class VotacionPage {
  public tipo;
  private arrVotacionPlantas;
  private arrVotacionMatafuegos;
  //private loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public servicioVotacion: VotacionProvider) {

      //this.createLoading("Trayendo votaciones...");
      //this.loading.present(); 
      this.tipo = localStorage.getItem("tipo");
      this.TraerVotacionesMatafuegos();
      this.TraerVotacionesPlantas();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VotacionPage');
  }

  Votar(votacion) {   
    if ((votacion == "") || (votacion == undefined) || (votacion == null)) {
        this.presentToast("Debe seleccionar si o no");     
    } else {
      localStorage.setItem("votacion", votacion);
      this.validarVotacion(this.tipo);      
      this.navCtrl.push(ResultadosPage,{"arrPlantas": this.arrVotacionPlantas, "arrMatafuegos": this.arrVotacionMatafuegos});
    }
  }

  private TraerVotacionesPlantas() {
    this.servicioVotacion.getTipo("Plantas").subscribe(
      data => {
        this.arrVotacionPlantas = data;
        //this.loading.dismiss();
      },
      err => console.error(err),
      () => console.log(this.arrVotacionPlantas)
    );
  }

  private TraerVotacionesMatafuegos() {
    this.servicioVotacion.getTipo("Matafuegos").subscribe(
      data => {
        this.arrVotacionMatafuegos = data;
        //this.loading.dismiss();
      },
      err => console.error(err),
      () => console.log(this.arrVotacionMatafuegos)
    );
  }

  private validarVotacion(tipo){
    let bandera = false;
    if (tipo == "Plantas") {
      this.arrVotacionPlantas.forEach(element => {
        if (element.usuario == localStorage.getItem('usuario'))
          bandera = true;
      });
    }

    if (tipo == "Matafuegos") {
      this.arrVotacionMatafuegos.forEach(element => {
        if (element.usuario == localStorage.getItem('usuario'))
          bandera = true;
      });
    }

    if(bandera==false){
      this.servicioVotacion.postResultado(this.tipo, localStorage.getItem("usuario"),  localStorage.getItem("votacion"));
        this.presentToast("El voto fue llevado a cabo");     
    }else{
        this.presentToast("Usted ya partició de esta votación");     
    }
  }

  private presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

  /*private createLoading(message: string)
  {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: message
    });
  }*/
}
