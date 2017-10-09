import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoVotacionPage } from './tipo-votacion';

@NgModule({
  declarations: [
    TipoVotacionPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoVotacionPage),
  ],
})
export class TipoVotacionPageModule {}
