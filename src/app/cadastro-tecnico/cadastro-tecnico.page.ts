import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-tecnico',
  templateUrl: 'cadastro-tecnico.page.html',
  styleUrls: ['cadastro-tecnico.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonText,
    IonButtons,
    IonBackButton
  ]
})
export class CadastroTecnicoPage {

  tecnico: any = {
    nome: '',
    especialidade: '',
    contato: '',
    situacao: 'Ativo'
  };

  tentouSalvar: boolean = false;

  constructor(
    private chamadoService: ChamadoService,
    private router: Router
  ) {}

  salvar(): void {
    this.tentouSalvar = true;

    if (this.tecnico.nome && this.tecnico.especialidade && this.tecnico.contato) {
      this.chamadoService.adicionarTecnico({ ...this.tecnico });
      this.router.navigate(['/lista-tecnicos']);
    }
  }
}
