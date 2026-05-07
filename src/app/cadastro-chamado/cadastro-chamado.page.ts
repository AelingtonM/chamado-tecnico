import { Component, OnInit } from '@angular/core';
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
  IonBackButton,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: 'cadastro-chamado.page.html',
  styleUrls: ['cadastro-chamado.page.scss'],
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
    IonBackButton,
    IonTextarea
  ]
})
export class CadastroChamadoPage implements OnInit {

  chamado: any = {
    solicitante: '',
    setor: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    dataAbertura: new Date().toISOString(),
    tecnico: '',
    status: 'Aberto'
  };

  tecnicos: any[] = [];
  tentouSalvar: boolean = false;

  constructor(
    private chamadoService: ChamadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tecnicos = this.chamadoService.listarTecnicos();
  }

  salvar(): void {
    this.tentouSalvar = true;

    if (
      this.chamado.solicitante &&
      this.chamado.titulo &&
      this.chamado.descricao &&
      this.chamado.prioridade &&
      this.chamado.tecnico
    ) {
      this.chamadoService.adicionarChamado({ ...this.chamado });
      this.router.navigate(['/lista-chamados']);
    }
  }
}
